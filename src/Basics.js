import React, { Component } from 'react';
import './Basics.css';
import ScrollAnimation from 'react-animate-on-scroll';

class Basics extends Component {
  render() {
    return (
      <div className="Basics">
        <div className="section basics-cover">
          <ScrollAnimation animateIn="bounceIn" animateOnce={true}>
          <div id="section-big">
              <strong>What</strong> are dreams?
          </div>
          </ScrollAnimation>
          <div>

            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div className="left-pane">
              {/*image*/}
              <img className="mini-image" src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4Mi8wMjYvb3JpZ2luYWwvYnJhaW4tc3RpbXVsYXRpb24uanBn" alt=''/>
            </div>
            </ScrollAnimation>

              <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
              <div className="middle-pane">
                {/*content*/}
                  <div className="content">
                  Dreams are a series of <strong>thoughts, images, and sensations</strong> occurring in the mind during sleep.
                  <ul>
                    <li>Dreams are <strong>created at random</strong> through electrical impulses which are recognized by the conscious brain</li>
                    <br />
                    <li>Dreams can be confusing, irrational, and bring out a <strong>wide variety of emotions</strong></li>
                    <br />
                    <li>While you dream, your <strong>will is absent or diminished</strong> - you do not have any control, with the exception of lucid dreaming</li>
                  </ul>
                  </div>
              </div>
              </ScrollAnimation>


            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <div className="right-pane">
              {/*did you know*/}
              <div className="fact">
                Did you know? <br />
                There are many kinds of dreaming - from daydreams and nightmares to out-of-body and lucid dreaming!
              </div>
            </div>
            </ScrollAnimation>

          </div>
        </div>
      </div>
    );
  }
}

export default Basics;
