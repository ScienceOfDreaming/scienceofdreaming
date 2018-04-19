import React, { Component } from 'react';
import './App.css';

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="full-cover">
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
    );
  }
}

export default App;
