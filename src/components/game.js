import React, {Component} from 'react'

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

    componentWillReceiveProps(newProps) {
        // console.log(newProps)
        this.keyHandler(newProps.keyBuffer)
    }

    keyHandler(keyBuffer) {
        const key = keyBuffer.shift()
        console.log("Key:" + key)
        if (key > 0 && key < 9) {
            const currentGame = this.state.currentGame
            currentGame.answers[key-1].revealed = !currentGame.answers[key-1].revealed
            this.setState({currentGame: currentGame})
        }
    }

    render() {
        return (
            <Board survey={this.state.currentGame} keyHandler={this.props.keyHandler}></Board>
        )
    }
}