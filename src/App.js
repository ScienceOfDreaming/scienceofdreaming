import React, { Component } from 'react';
import './App.css';
import Basics from './Basics';
import BasicsWhy from './BasicsWhy';
import BasicsWhen from './BasicsWhen';
import SleepTypesPane from './SleepTypesPane';
import 'animate.css/animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <div className="full-cover">
          <div id='main-title'>
            <ScrollAnimation animateIn="fadeIn" offset={0} delay={1500} animateOnce={true}>
              <div id="big">
                  The Science of Dreaming
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" offset={0} delay={2500} duration={2} animateOnce={true}>
              <div id="small">
                <i>Dream (n): A series of thoughts, images, and sensations occurring in a person's mind during sleep</i>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn="fadeIn" offset={0} delay={500} duration={1} animateOnce={true}>
            <div id='overlay'></div>
          </ScrollAnimation>
        </div>
      </div>
      <Basics></Basics>
      <BasicsWhy></BasicsWhy>
      <BasicsWhen></BasicsWhen>
      <SleepTypesPane></SleepTypesPane>
      </React.Fragment>
    );
  }
}

export default App;
