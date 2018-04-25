import React, { Component } from 'react';
import './Basics.css';

class Basics extends Component {
  render() {
    return (
      <div className="Basics">
        <div class="section basics-cover">
          <div id="section-big">
              <strong>What</strong> are dreams?
          </div>
          <div>

            <div class="left-pane">
              {/*image*/}
              <img class="mini-image" src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4Mi8wMjYvb3JpZ2luYWwvYnJhaW4tc3RpbXVsYXRpb24uanBn" alt=''/>

            </div>

              <div class="middle-pane">
                {/*content*/}
                  <div class="content">
                  Dreams are a series of <strong>thoughts, images, and sensations</strong> occurring in the mind during sleep.
                  <ul>
                    <li>Dreams are <strong>created at random</strong> through electrical impulses which are recognized by the conscious brain</li>
                    <br />
                    <li>Dreams can be confusing, irrational, and bring out a <strong>wide variety of emotions</strong></li>
                    <br />
                    <li>While you dream, your will is absent or diminished - you do not have any control, with the exception of lucid dreaming</li>
                  </ul>
                  </div>
              </div>



            <div class="right-pane">
              {/*did you know*/}
              <div class="fact">
                Did you know? <br />
                There are many kinds of dreaming - from daydreams and nightmares to out-of-body and lucid dreaming!
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Basics;
