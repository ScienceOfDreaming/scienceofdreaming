import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import './SleepTypeDialog.css';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default class SleepTypeDialog extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose} maxWidth='false'>
                {/*<DialogTitle id="alert-dialog-title"></DialogTitle>*/}
                <div class='dialog-modal-wrapper'>
                  <AppBar position="static">
                      <Tabs
                          centered
                          value={this.state.value}
                          onChange={this.handleChange}
                          /*fullWidth={true}*/
                      >
                          <Tab label="What it is" />
                          <Tab label="How it occurs" />
                          <Tab label="Tips and Tricks" />

                      </Tabs>
                  </AppBar>
                  {this.state.value === 0 &&
                    <React.Fragment>
                      <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                          </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={this.handleClose} color="primary">
                            Disagree
                          </Button>
                          <Button onClick={this.handleClose} color="primary" autoFocus>
                            Agree
                          </Button>
                      </DialogActions>
                    </React.Fragment>
                  }
                  {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
                  {this.state.value === 2 && <TabContainer>Item Three</TabContainer>}
                </div>
            </Dialog>
        );
    }
}
