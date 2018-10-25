import React, {Component} from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import Board from './board.js'

const { ipcRenderer } = window.require('electron');

class Console extends Component {
    constructor(props) {
        super(props)

        var gameData = require('../res/surveys.json')
        var currentGame = gameData.surveys[0]
        this.resetGame(currentGame)

        this.state = {
            test: 'nothing',
            gameData: gameData,
            currentGame: currentGame
        }
    }

    updatePresentation() {
        ipcRenderer.send('updatePresentation', 'It works!')
    }

    // render() {
    //     return (
    //         <div>
    //             test
    //             <button onClick={this.updatePresentation}>Click Here</button>
    //         </div>
    //     )
    // }

    updateCurrentGame = (currentGame) => {
        this.setState({currentGame: currentGame})
        ipcRenderer.send('updatePresentation', currentGame)
    }

    resetGame(currentGame) {
        currentGame.answers.forEach(function(answer) {
            answer.revealed = false;
        })
    }

    render() {
        return (
            <div style={{height:"100%"}}> {/*necessary div for KeyboardEventHandler*/}
                {this.state.test}
                <Board 
                    survey={this.state.currentGame} 
                    admin={true}
                    updateCurrentGame={this.updateCurrentGame}
                    keyHandler={this.props.keyHandler}/>
                {/* <KeyboardEventHandler
                    handleKeys={['all']}
                    onKeyEvent={(key, e) => this.keyHandler(key)}/> */}
            </div>
        )
    }

}

export default Console