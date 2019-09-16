import React, {Component} from 'react'
import './strikePanel.css'
import Modal from '../modal'
import strike from '../../res/strike.png'

const { ipcRenderer } = window.require('electron');

export default class StrikePanel extends Component {
    constructor(props) {
        super(props)
        this.state = {enabled: true}
    }

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    showStrikes = (strike) => {
        if (this.state.enabled) {
            this.setState({enabled: false})
            ipcRenderer.send('showStrikes', strike)
            setTimeout(() => {this.setState({enabled: true})}, 1500)
        }
    }

    renderStrikes = (strikes) => {
        return [...Array(strikes)].map((e, i) => <img key={i} className='strike-button' onClick={() => this.showStrikes(i+1)} src={strike} alt='X'/>)
    }

    render() {
        const strikes = this.renderStrikes(3);

        return (
            <div className='strike-button-panel'>
                {strikes}
            </div>
        )
    }
}