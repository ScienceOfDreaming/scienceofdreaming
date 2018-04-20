import React, { Component } from 'react';
import './App.css';
import SleepTypesPane from './SleepTypesPane'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="full-cover">
            <div id='main-title'>
              <div id="big">
                  The Science of Dreaming
              </div>
              <div id="small">
                <i>Dream (n): A series of thoughts, images, and sensations occurring in a person's mind during sleep</i>
                </div>
            </div>
          </div>
        </div>
        <SleepTypesPane></SleepTypesPane>
      </React.Fragment>
    );
  }
}

export default App;
