import React, {Component} from 'react'
import './answer.css'

export default class Answer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: props.index,
            answer: props.answer
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({answer: this.props.answer})
    }

    render() {
        return (
            <div className={"card card-container " + (this.state.answer.revealed ? 'is-flipped':'')}>
                <div className="card index-card  card__face">
                    {this.state.index}
                </div>
                <div className="card value-card card__face card__face--back" >
                    <div className="answer-text">
                        {this.state.answer.text}
                    </div>
                    <div className="answer-value">
                        {this.state.answer.value}
                    </div>
                </div>
            </div>
        )
    }
}