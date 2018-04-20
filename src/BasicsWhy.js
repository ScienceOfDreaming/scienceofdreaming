import React, { Component } from 'react';
import './BasicsWhy.css';

class BasicsWhy extends Component {
  render() {
    return (
      <div className="BasicsWhy">
        <div class="section basicsWhy-cover">
          <div id="section-big">
              <strong>Why</strong> do we dream?
          </div>
          <div>

            <div class="left-pane">
              {/*image*/}
              <img class="mini-image" src="https://lh3.googleusercontent.com/OH9FS1WTg0oUyG0Y3paFC8IrcO5x-0Cw4wONk6agjbHvjFRsI06ZuHZ0X49nGuqps7g=h1264" />
            
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
                insert fun fact about why we dream here.
              </div>
            </div> 

          </div>
        </div>
      </div>
    );
  }
}

export default BasicsWhy;
