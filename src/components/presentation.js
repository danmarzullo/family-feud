import React, {Component, useState} from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import ScorePanel from './scorePanel'
import Board from './board'
import StrikePopup from './presentation/strikePopup'
import './presentation.css'

const {ipcRenderer} = window.require('electron')

export default class Presentation extends Component {
  constructor(props) {
    super(props)
    this.initializeState()
  }

  componentDidMount() {
    ipcRenderer.on('updateBoard', (event, state) => {
      console.log(state);
      this.setState(state);
    })
  }

  initializeState() {
    let answers = []
    for (let i = 0; i < 8; i++) {
      answers.push({text: "", value: 0})
    }
    const blankSurvey = {answers: answers}

    var currentGame = blankSurvey
    this.resetGame(currentGame)

    this.state = {
      test: 'nothing',
      gameData: currentGame,
      currentGame: currentGame,
      survey: blankSurvey,
      teams: [
        {name:'', score:0},
        {name:'', score:0}
      ]
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

  updateSurvey = (survey) => {
    this.setState({survey: survey})
  }

  render() {
    return (
      <div id='presentation' style={{height:"100%"}}> {/*necessary div for KeyboardEventHandler*/}
        <ScorePanel teams={this.state.teams}/>
        <Board 
          survey={this.state.survey.answers} 
          admin={false} 
          updateCurrentGame={this.updateSurvey}
          keyHandler={this.props.keyHandler}/>
        <StrikePopup/>
        <KeyboardEventHandler
          handleKeys={['all']}
          onKeyEvent={(key, e) => this.keyHandler(key)}/>
      </div>
    )
  }
}

const myComponent = (props) => {
  const myCounter = useState(0)

  return (
    <div></div>
  )
}