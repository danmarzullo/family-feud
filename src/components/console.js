import React, {Component} from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import Board from './board'
import StrikePanel from './console/strikePanel'

const { ipcRenderer } = window.require('electron');

class Console extends Component {
	constructor(props) {
		super(props)

		var gameData = require('../res/surveys.json')
		var survey = gameData.surveys[0]
		this.resetSurvey(survey)

		this.state = {
			survey: survey,
			scores: [
				{name:'', score:0},
				{name:'', score:0}
			]
		}
	}

	updateSurvey = (answers) => {
		this.setState({survey: {...this.state.survey, answers: answers}})
		this.updateBoard()
	}

	updateBoard = () => {
		ipcRenderer.send('updateBoard', this.state)
	}

	resetSurvey(currentGame) {
		currentGame.answers.forEach(function(answer) {
			answer.revealed = false;
		})
	}

	render() {
		return (
			<div style={{height:"100%"}}> {/*necessary div for KeyboardEventHandler*/}
				Judge Panel
				<Board 
					survey={this.state.survey.answers} 
					admin={true}
					updateSurvey={this.updateSurvey}
					keyHandler={this.props.keyHandler}/>
				<StrikePanel/>
				{/* <KeyboardEventHandler
						handleKeys={['all']}
						onKeyEvent={(key, e) => this.keyHandler(key)}/> */}
			</div>
		)
	}
}

export default Console