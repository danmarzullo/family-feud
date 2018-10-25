import React, {Component} from 'react'
import './answer.css'

export default class Answer extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     index: props.index,
        //     answer: props.answer
        // }
    }

    componentWillReceiveProps(newProps) {
        this.setState({answer: this.props.answer})
    }

    updateAnswer = () => {
        this.props.updateAnswer(this.props.index, !this.props.answer.revealed)
    }

    render() {
        return (
            <div 
                className={"card card-container " + (this.props.answer.revealed ? 'is-flipped':'')}
                onClick={this.updateAnswer}>
                <div className={"card index-card  card__face " + (this.props.admin ? 'admin':'')}>
                    {this.props.index}
                    {this.props.admin ? this.props.answer.text:''}
                </div>
                <div className="card value-card card__face card__face--back" >
                    <div className="answer-text">
                        {this.props.answer.text}
                    </div>
                    <div className="answer-value">
                        {this.props.answer.value}
                    </div>
                </div>
            </div>
        )
    }
}