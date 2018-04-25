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
              <img class="mini-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREskw-dm33ggE4aF5jEJ7oaSwnnjrjNke7JOvSK7fF5uoQCJzh5Q" alt=''/>

            </div>



            <div class="middle-pane">
              {/*content*/}
                <div class="content">
                During our sleep cycle, we alternate between <em>REM</em> (rapid-eye movement) sleep and <em>NREM</em> sleep.
                <ul>
                  <li>Dreams are possible during both states but happen <strong>more often in REM sleep</strong></li>
                  <br />
                  <li>There are usually <strong>4 to 6 dream periods</strong> in an eight-hour night</li>
                  <br />
                  <li>REM state dreams are typically <strong>longer, more vivid, more animated</strong></li>
                </ul>
                </div>
            </div>



            <div class="right-pane">
              {/*did you know*/}
              <div class="fact">
                Did you know?<br />
                The time spent dreaming varies with age - adults spend <strong>~25%</strong> of their sleep in REM while children spend <strong>~50%</strong>!
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default BasicsWhen;
