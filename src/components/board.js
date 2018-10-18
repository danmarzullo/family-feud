import React, {Component} from "react"

import './board.css'
import Answer from './answer'

export default class Board extends Component {
    constructor(props) {
        super(props)
        
        // var answers = []
        
        // for(var i = 0; i < 8; i++) {
        //     answers[i] = <Answer index={i+1} answer={this.props.survey.answers[i]}></Answer>
        // }

        // this.setState({answer: answers})

        this.state = {
            answers: this.props.survey.answers
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({answers: newProps.survey.answers})
    }

    render() {
        // const answers = this.state.answers
        return (
            <div id='board_parent' className='table-wrapper'>
                <table id='game_board' className="is-vcentered">
                    <tbody>
                        <tr>
                            {/* <td>{answers[0]}</td>
                            <td>{answers[4]}</td> */}
                            <td><Answer index={1} answer={this.state.answers[0]}/></td>
                            <td><Answer index={5} answer={this.state.answers[4]}/></td>
                        </tr>
                        <tr>
                            {/* <td>{answers[1]}</td>
                            <td>{answers[5]}</td> */}
                            <td><Answer index={2} answer={this.state.answers[1]}/></td>
                            <td><Answer index={6} answer={this.state.answers[5]}/></td>
                        </tr>
                        <tr>
                            {/* <td>{answers[2]}</td>
                            <td>{answers[6]}</td> */}
                            <td><Answer index={3} answer={this.state.answers[2]}/></td>
                            <td><Answer index={7} answer={this.state.answers[6]}/></td>
                        </tr>
                        <tr>
                            {/* <td>{answers[3]}</td>
                            <td>{answers[7]}</td> */}
                            <td><Answer index={4} answer={this.state.answers[3]}/></td>
                            <td><Answer index={8} answer={this.state.answers[7]}/></td>
                        </tr>
                    </tbody>
                </table>
                {/* <div>
                    {answersFirstColumn.map((answer) => {
                        return <p>{answer}</p>
                    })}
                </div>
                <div>
                    {answersSecondColumn.map((answer) => {
                        return <p>{answer}</p>
                    })}
                </div> */}
            </div>
        )
        
    }
}