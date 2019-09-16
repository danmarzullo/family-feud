import React, {Component} from 'react'
import './strikePopup.css'
import Modal from '../modal'
import x from '../../res/strike.png'
import strikeFile from '../../res/strike.wav'
const path = require('path')

const {ipcRenderer} = window.require('electron')

export default class StrikePopup extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            show: true,
            strikes: 0,
            strikeSound: new Audio(strikeFile)
        }

    }
    
    componentDidMount() {
        ipcRenderer.on('showStrikes', (event, strikes) => {
            console.log(strikes);
            this.setState({strikes: strikes})
            setTimeout(() => this.setState({strikes: 0}), 1500)
            this.state.strikeSound.play()
          });
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    renderStrikes = (strikes) => {
        return [...Array(strikes)].map((e, i) => <img key={i} className='pop-up' src={x} alt='X'/>)
    }

    render() {
        const strikes = this.renderStrikes(this.state.strikes);

        return (
            <Modal show={this.state.show} handleClose={this.hideModal}>
                {strikes}
            </Modal>
        )
    }




}