import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Board from './components/board'
import Game from './components/game';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyBuffer: []
    }
    this.keyHandler = this.keyHandler.bind(this)
  }

  keyHandler(event) {
    console.log(event.keyCode)
    var keyBuffer = this.state.keyBuffer
    keyBuffer.push(event.key)
    this.setState({keyBuffer: keyBuffer})
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyHandler, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyHandler, false)
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Game keyBuffer={this.state.keyBuffer}/>
      </div>
    );
  }
}

export default App;
