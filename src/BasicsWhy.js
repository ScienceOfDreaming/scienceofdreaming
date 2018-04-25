import React, { Component } from 'react';
import './BasicsWhy.css';
import ScrollAnimation from 'react-animate-on-scroll';

class BasicsWhy extends Component {
  render() {
    return (
      <div className="BasicsWhy">
        <div className="section basicsWhy-cover">
          <ScrollAnimation animateIn="bounceIn" animateOnce={true}>
          <div id="section-big">
              <strong>Why</strong> do we dream?
          </div>
          </ScrollAnimation>
          <div>

            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div className="left-pane">
              {/*image*/}
              <img className="mini-image" src="https://lh3.googleusercontent.com/OH9FS1WTg0oUyG0Y3paFC8IrcO5x-0Cw4wONk6agjbHvjFRsI06ZuHZ0X49nGuqps7g=h1264" alt=''/>

            </div>
            </ScrollAnimation>


            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <div className="middle-pane">
              {/*content*/}
                <div className="content">
                While there are many possible explanations, there is no consensus on these theories.
                <ul>
                  <li>One hypothesis is dreams <strong>help us adapt to stressful waking events</strong> - relating new stressful situations to how we solved similar problems.</li>
                  <br />
                  <li>Sigmund Freud believed dreams expressed personal content, an idea of <strong>wish fulfillment</strong></li>
                  <br />
                  <li>In general, there is no one reason - dream sleep <strong>supports a wide variety of bodily functions</strong>.</li>
                </ul>
                </div>
            </div>
            </ScrollAnimation>


            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <div className="right-pane">
              {/*did you know*/}
              <div className="fact">
                Did you know? <br />
                We forget <strong>95%</strong> of the dreams we have, especially within the first 10 minutes of having them!
              </div>
            </div>
            </ScrollAnimation>

          </div>
        </div>
      </div>
    );
  }
}

export default BasicsWhy;
