import React, { Component } from 'react';
import './App.css';
import Basics from './Basics';
import BasicsWhy from './BasicsWhy';
import BasicsWhen from './BasicsWhen';
import SleepTypesPane from './SleepTypesPane'

class App extends Component {
  render() {
    return (
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
          <div id='overlay'></div>
        </div>
        <Basics></Basics>
        <BasicsWhy></BasicsWhy>
        <BasicsWhen></BasicsWhen>
        <SleepTypesPane></SleepTypesPane>
      </div>
    );
  }
}

export default App;
