import React, {Component} from "react"

import './board.css'
import Answer from './answer'

export default class Board extends Component {
    constructor(props) {
        super(props)

        this.answerComponents = []

        this.state = {
            answers: this.props.survey.answers
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({answers: newProps.survey})
    }

    updateAnswer = (index, show) => {
        var answers = this.state.answers
        answers[index-1].revealed = show
        this.setState({answers: answers})
        this.props.updateCurrentGame(answers)
    }

    render() {
        return (
            <div id='board_parent' className='table-wrapper'>
                <table id='game_board' className='is-vcentered'>
                    <tbody>
                        <tr>
                            <td><Answer index={1} answer={this.state.answers[0]} updateAnswer={this.updateAnswer} admin={this.props.admin}/></td>
                            <td><Answer index={5} answer={this.state.answers[4]} updateAnswer={this.updateAnswer} admin={this.props.admin}/></td>
                        </tr>
                        <tr>
                            <td><Answer index={2} answer={this.state.answers[1]} updateAnswer={this.updateAnswer} admin={this.props.admin}/></td>
                            <td><Answer index={6} answer={this.state.answers[5]} updateAnswer={this.updateAnswer} admin={this.props.admin}/></td>
                        </tr>
                        <tr>
                            <td><Answer index={3} answer={this.state.answers[2]} updateAnswer={this.updateAnswer} admin={this.props.admin}/></td>
                            <td><Answer index={7} answer={this.state.answers[6]} updateAnswer={this.updateAnswer} admin={this.props.admin}/></td>
                        </tr>
                        <tr>
                            <td><Answer index={4} answer={this.state.answers[3]} updateAnswer={this.updateAnswer} admin={this.props.admin}/></td>
                            <td><Answer index={8} answer={this.state.answers[7]} updateAnswer={this.updateAnswer} admin={this.props.admin}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
        
    }
}