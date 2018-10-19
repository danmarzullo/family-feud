import React, { Component } from 'react';
import './App.css';

// import Board from './components/board'
import Game from './components/game';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default App;
