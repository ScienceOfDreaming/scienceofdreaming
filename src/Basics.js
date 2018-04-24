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
              <img class="mini-image" src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4Mi8wMjYvb3JpZ2luYWwvYnJhaW4tc3RpbXVsYXRpb24uanBn" />
            
            </div>

            

            <div class="middle-pane">
              {/*content*/}
                <div class="content">
                "Introductory sentence here explaining what this section is about."
                <ul>
                  <li>details</li>
                  <br />
                  <li>details</li>
                  <br />
                  <li>details</li>
                </ul>
                </div>
            </div> 

            

            <div class="right-pane">
              {/*did you know*/}
              <div class="fact">
                Did you know? <br />
                insert fun fact about dreaming here.
              </div>
            </div> 

          </div>
        </div>
      </div>
    );
  }
}

export default Basics;
