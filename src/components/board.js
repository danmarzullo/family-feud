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

        this.setupAnswers()
    }

    componentWillReceiveProps(newProps) {
        this.setState({answers: newProps.survey.answers})
    }

    updateAnswer = (index, show) => {
        var answers = this.state.answers
        answers[index-1].revealed = show
        this.props.updateCurrentGame(answers)
    }

    setupAnswers() {
        this.state.answers.forEach( (answer, index) => {
            this.answerComponents[index] = <Answer 
                                        index={index+1} 
                                        answer={answer} 
                                        updateAnswer={this.updateAnswer}
                                        admin={this.props.admin}/>
        });
    }

    render() {
        return (
            <div id='board_parent' className='table-wrapper'>
                {this.props.admin ? 'true':'false'}
                <table id='game_board' className='is-vcentered'>
                    <tbody>
                        {/* <tr>
                            <td><Answer index={1} answer={this.state.answers[0]}/></td>
                            <td><Answer index={5} answer={this.state.answers[4]}/></td>
                        </tr>
                        <tr>
                            <td><Answer index={2} answer={this.state.answers[1]}/></td>
                            <td><Answer index={6} answer={this.state.answers[5]}/></td>
                        </tr>
                        <tr>
                            <td><Answer index={3} answer={this.state.answers[2]}/></td>
                            <td><Answer index={7} answer={this.state.answers[6]}/></td>
                        </tr>
                        <tr>
                            <td><Answer index={4} answer={this.state.answers[3]}/></td>
                            <td><Answer index={8} answer={this.state.answers[7]}/></td>
                        </tr> */}
                        <tr>
                            <td>{this.answerComponents[0]}</td>
                            <td>{this.answerComponents[4]}</td>
                        </tr>
                        <tr>
                            <td>{this.answerComponents[1]}</td>
                            <td>{this.answerComponents[5]}</td>
                        </tr>
                        <tr>
                            <td>{this.answerComponents[2]}</td>
                            <td>{this.answerComponents[6]}</td>
                        </tr>
                        <tr>
                            <td>{this.answerComponents[3]}</td>
                            <td>{this.answerComponents[7]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
        
    }
}