import React, { Component } from 'react';
import './BasicsWhen.css';

class BasicsWhen extends Component {
  render() {
    return (
      <div className="BasicsWhen">
        <div class="section basicsWhen-cover">
          <div id="section-big">
              <strong>When</strong> do we dream?
          </div>
          <div>

            <div class="left-pane">
              {/*image*/}
              <img class="mini-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREskw-dm33ggE4aF5jEJ7oaSwnnjrjNke7JOvSK7fF5uoQCJzh5Q" />
            
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
                insert fun fact about when we dream here.
              </div>
            </div> 

          </div>
        </div>
      </div>
    );
  }
}

export default BasicsWhen;
