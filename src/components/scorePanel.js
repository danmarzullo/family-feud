import React, {Component} from 'react'
import './scorePanel.css'

export default class ScorePanel extends Component {

  updateTeam1 = event => {
    let { teams } = this.props
    teams[0].name = event.target.value
    return this.props.updateTeamNames(teams)
  }
  
  updateTeam2 = event => {
    let { teams } = this.props
    teams[1].name = event.target.value
    return this.props.updateTeamNames(teams)
  }

  render() {
    return (
      <div id='score_panel'>
        <div id='team_1' className='score-box'>
          <input class='team-name-input'
            type='text'
            value={this.props.teams[0].name} 
            placeholder='Team 1'
            onChange={this.updateTeam1}/>
          <div class='team-score'>{this.props.teams[0].score}</div>
        </div>
        <div class='current-score-box'>
          <div class='current-score'>
            {this.props.currentScore}
          </div>
        </div>
        <div id='team_2' className='score-box'>
        <input class='team-name-input'
            type='text'
            value={this.props.teams[1].name} 
            placeholder='Team 2'
            onChange={this.updateTeam2}/>
          <div class='team-score'>{this.props.teams[1].score}</div>
        </div>
      </div>
    )
  }
}