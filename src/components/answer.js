import React, {Component} from 'react'
import './answer.css'
import flipFile from '../res/flip.mp3'

export default class Answer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            revealed: props.answer.revealed,
            flipSound: new Audio(flipFile)
        }
    }

    componentWillReceiveProps(newProps) {
        this.playSound(newProps.answer.revealed)
    }

    playSound = (revealed) => {
        // Only play if flip detected
        if (this.state.revealed !== revealed) {
            this.setState({answer: revealed})
            this.state.flipSound.play()
        }
    }

    updateAnswer = () => {
        this.props.updateAnswer(this.props.index, !this.props.answer.revealed)
    }

    render() {
        return (
            <div 
                className={"card card-container " + (this.props.answer.revealed ? 'is-flipped':'')}
                onClick={this.props.admin ? this.updateAnswer:''}>
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