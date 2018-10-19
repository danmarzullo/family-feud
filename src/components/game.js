import React, {Component} from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import Board from './board.js'

// const fs = require('fs');


export default class Game extends Component {
    constructor(props) {
        super(props)

        // const surveyFile = fs.readFileSync('../res/surveys.yaml', 'utf8')
        // const surveys = YAML.parse(surveyFile)

        var gameData = require('../res/surveys.json')
        var currentGame = gameData.surveys[0]
        this.resetGame(currentGame)

        this.state = {
            gameData: gameData,
            currentGame: currentGame
        }
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

    render() {
        return (
            <div style={{height:"100%"}}> {/*necessary div for KeyboardEventHandler*/}
                <Board survey={this.state.currentGame} keyHandler={this.props.keyHandler}/>
                <KeyboardEventHandler
                    handleKeys={['all']}
                    onKeyEvent={(key, e) => this.keyHandler(key)}/>
            </div>
        )
    }
}