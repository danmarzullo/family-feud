import React, {Component} from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import Board from './board.js'

const {ipcRenderer} = window.require('electron')

// const fs = require('fs');


export default class Presentation extends Component {
    constructor(props) {
        super(props)

        // const surveyFile = fs.readFileSync('../res/surveys.yaml', 'utf8')
        // const surveys = YAML.parse(surveyFile)

        var gameData = require('../res/surveys.json')
        var currentGame = gameData.surveys[0]
        this.resetGame(currentGame)

        this.state = {
            test: 'nothing',
            gameData: gameData,
            currentGame: currentGame
        }
    }

    componentDidMount() {
        ipcRenderer.on("updateGameData", (event, gameData) => {
            console.log(gameData);
            this.setState({ 
                gameData: gameData,
                currentGame: gameData
            });
          });
    }

    selectSurvey() {
        var currentGame = this.state.gameData.surveys[0]
        this.resetGame(currentGame)
        this.setState({currentGame})
    }

    resetGame(currentGame) {
        currentGame.answers.forEach(function(answer) {
            answer.revealed = false;
        })
    }

    keyHandler(key) {
        console.log("Key:" + key)
        if (key > 0 && key < 9) {
            const currentGame = this.state.currentGame
            currentGame.answers[key-1].revealed = !currentGame.answers[key-1].revealed
            this.setState({currentGame: currentGame})
        }
    }

    updateCurrentGame = (currentGame) => {
        this.setState({currentGame: currentGame})
    }

    render() {
        return (
            <div style={{height:"100%"}}> {/*necessary div for KeyboardEventHandler*/}
                <Board 
                    survey={this.state.currentGame} 
                    admin={false} 
                    updateCurrentGame={this.updateCurrentGame}
                    keyHandler={this.props.keyHandler}/>
                <KeyboardEventHandler
                    handleKeys={['all']}
                    onKeyEvent={(key, e) => this.keyHandler(key)}/>
            </div>
        )
    }
}