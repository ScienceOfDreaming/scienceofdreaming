import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'relative',
    width: theme.spacing.unit * 100,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Sources/Credits</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Sources/Credits
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Here is a list of all sources/credits used for this website.
              <ol>
                <li><a target="_" href="http://dreamscience.org/science_of_dreaming_images/The_Science_of_Dreaming-Rev_1%20_2_.pdf"><em>The Science of Dreaming</em></a> [PDF]</li>
                <li><a target="_" href="https://youtu.be/7GGzc3x9WJU">Why do We Dream?</a> [Video]</li>
                <li><a target="_" href="https://www.webmd.com/sleep-disorders/guide/dreaming-overview#1">Facts about Dreaming</a></li>
                <li>Image</li>
                <li>Image</li>
                <li>Image</li>
                <li>Image</li>
                <li><a target="_" href="https://www.favicon.cc/?action=icon&file_id=900481">Favicon</a></li>
              </ol>
            </Typography>
            <Button onClick={this.handleClose}>Close</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;