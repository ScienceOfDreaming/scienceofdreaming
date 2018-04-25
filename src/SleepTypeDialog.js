import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Dialog, { DialogContent } from 'material-ui/Dialog';
import Tabs, { Tab } from 'material-ui/Tabs';
import './SleepTypeDialog.css';

export function TabContent(props) {
  return (
    <DialogContent>
      {props.children}
    </DialogContent>
  );
}

export default class SleepTypeDialog extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose} maxWidth='false'>
                <div class='dialog-modal-wrapper'>
                  <AppBar position="static" className='app-bar-above-content'>
                      <Tabs
                          centered
                          value={this.state.value}
                          onChange={this.handleChange}
                          fullWidth={true}
                      >
                          <Tab label="What it is" />
                          <Tab label="How it occurs" />
                          <Tab label="Tips and Tricks" />

                      </Tabs>
                  </AppBar>
                  {React.Children.map(this.props.children, (child, i) => {
                    if (i === this.state.value) return child;
                  })}
                </div>
            </Dialog>
        );
    }
}
