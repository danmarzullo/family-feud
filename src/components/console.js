import React, {Component} from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import ScorePanel from './scorePanel'
import Board from './board'
import StrikePanel from './console/strikePanel'
import AddPoints from './console/addPoints'

const { ipcRenderer } = window.require('electron');

class Console extends Component {
	constructor(props) {
		super(props)

		var gameData = require('../res/surveys.json')
		var survey = gameData.surveys[0]
		this.resetSurvey(survey)

		this.state = {
			survey: survey,
			teams: [
				{name:'Team 1', score:0},
				{name:'Team 2', score:0}
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

	resetSurvey = (currentGame) => {
		currentGame.answers.forEach(function(answer) {
			answer.revealed = false;
		})
	}

	updateScore = (team, points) => {
		let teams = this.state.teams
		teams[team - 1].score += points
		this.setState({teams: teams})
		this.updateBoard()
	}

	updateTeamNames = (teams) => {
		this.setState({teams: teams})
		this.updateBoard()
	}

	render() {
		return (
			<div style={{height:"100%"}}> {/*necessary div for KeyboardEventHandler*/}
				Judge Panel
				<ScorePanel teams={this.state.teams} updateTeamNames={this.updateTeamNames} />
				<Board 
					survey={this.state.survey.answers} 
					admin={true}
					updateSurvey={this.updateSurvey}
					keyHandler={this.props.keyHandler}/>
				<StrikePanel/>
				<AddPoints survey={this.state.survey} updateScore={this.updateScore}/>
				{/* <KeyboardEventHandler
						handleKeys={['all']}
						onKeyEvent={(key, e) => this.keyHandler(key)}/> */}
			</div>
		)
	}
}

export default Console