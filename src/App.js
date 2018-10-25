import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Presentation from './components/presentation'
import Console from './components/console'

import './App.css';

class App extends Component {
  static Views() {
    return {
      presentation: <Presentation/>,
      console: <Console/>
    }
  }

  static View(props) {
    let name = props.location.search.substr(1);
    let view = App.Views()[name];
    if (view == null) {
      throw new Error("View '" + name + "' is undefined")
    }
    return view;
  }

  constructor(props) {
    super(props)

    this.updateGameData = this.updateGameData.bind(this)

    this.state = {
      gameData: "original"
    }
  }

  updateGameData = (gameData) => {
    this.setState({gameData: gameData})
  }
  
  render() {
    return (
      <Router>
        <div className='App'>
          {this.state.gameData}
          <Route path='/' component={App.View}/>
        </div>
      </Router>
    );
  }
}

export default App
