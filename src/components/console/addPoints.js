import React, {Component} from 'react'
import './addPoints.css'
import Modal from '../modal'
import strike from '../../res/strike.png'

const { ipcRenderer } = window.require('electron');

export default class AddPoints extends Component {


  showModal = () => {
    this.setState({ show: true });
  };
  
  hideModal = () => {
    this.setState({ show: false });
  };

  addPointsToTeam = (team) => {
    let currentGameScore = 0
    for (let answer in this.props.survey.answers) {
      currentGameScore += this.props.survey.answers[answer].revealed ? this.props.survey.answers[answer].value : 0
    }
    this.props.updateScore(team, currentGameScore)
  }

  render() {
    return (
      <div className='add-points-button-panel'>
          <button className='add-points-button' onClick={() => this.addPointsToTeam(1)}> Add points to Team 1 </button>
          <button className='add-points-button' onClick={() => this.addPointsToTeam(2)}> Add points to Team 2 </button>
      </div>
    )
  }
}