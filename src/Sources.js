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
            <Typography>
              Here is a list of all sources used for this website.
              <ol>
                <li><a target="_" href="http://dreamscience.org/science_of_dreaming_images/The_Science_of_Dreaming-Rev_1%20_2_.pdf"><em>The Science of Dreaming</em></a> [PDF]</li>
                <li><a target="_" href="https://youtu.be/7GGzc3x9WJU">Why do We Dream?</a> [YouTube video]</li>
                <li><a target="_" href="https://www.webmd.com/sleep-disorders/guide/dreaming-overview#1">Facts about Dreaming</a> [<em>WebMD</em>]</li>
                <li><a target="_" href="https://sites.psu.edu/siowfa15/2015/09/10/the-science-behind-lucid-dreaming/">The Science Behind Lucid Dreaming</a> [Website]</li>
                <li><a target="_" href="https://www.udemy.com/dream-hacking/">Dream Hacking</a> [Udemy online course]</li>
                <li><a target="_" href="http://howtolucid.com/wake-induced-lucid-dream-w-l-d-technique/">Wake Induced Lucid Dreaming: The Most Effective WILD Tutorial</a> [Website]</li>
                <li><a target="_" href="https://www.stuffyoushouldknow.com/podcasts/can-you-control-your-dreams.htm">Can you control your dreams?</a> [Podcast]</li>
                <li><a target="_" href="https://news.nationalgeographic.com/news/2013/07/130716-daydreaming-science-health-brain/">Five Surprising Facts About Daydreaming</a> [<em>National Geographic</em>]</li>
                <li><a target="_" href="https://www.newyorker.com/humor/daily-shouts/the-science-of-daydreams">The Science of Daydreams</a> [<em>The New Yorker</em>]</li>
                <li><a target="_" href="https://www.webmd.com/sleep-disorders/guide/nightmares-in-adults">Nightmares in Adults</a> [<em>WebMD</em>]</li>
                <li><a target="_" href="https://www.livescience.com/56096-surprising-facts-about-daydreaming.html">Daydreaming Again? 5 Facts About the Wandering Mind</a> [<em>Live Science</em>]</li>
                <li><a target="_" href="https://www.google.com/search?hl=en&q=signature+of+all+things:+signatura+rerum+(forgotten+books)&tbm=isch&tbs=simg:CAQSlQEJAlGiPXgC6aUaiQELEKjU2AQaAggVDAsQsIynCBpiCmAIAxIojQuKC4kL-QuCC4kEiwuEC4YLkgvhIckiozfeIqQ3uyuqN-k5pzemKxownZJY9NEYOS1tMnbQ_1X1FmEnLkkypdwjddSxEqOf19CBT09PMftaPVHZYgtLi8Y8JIAQMCxCOrv4IGgoKCAgBEgQo8MrpDA&sa=X&ved=0ahUKEwjDksu1x9baAhVJVWMKHW7qD7MQwg4IJigA&biw=1280&bih=680&dpr=2#imgrc=nD6REPCYi3R3wM:">Main cover</a> [image]</li>
                <li><a target="_" href="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4Mi8wMjYvb3JpZ2luYWwvYnJhaW4tc3RpbXVsYXRpb24uanBn">Image for "What" section</a> [image]</li>
                <li><a target="_" href="https://lh3.googleusercontent.com/OH9FS1WTg0oUyG0Y3paFC8IrcO5x-0Cw4wONk6agjbHvjFRsI06ZuHZ0X49nGuqps7g=h1264">Image for "Why" section</a> [image]</li>
                <li><a target="_" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREskw-dm33ggE4aF5jEJ7oaSwnnjrjNke7JOvSK7fF5uoQCJzh5Q">Image for "When" section</a> [image]</li>
                <li><a target="_" href="https://thenounproject.com/term/nightmare/968727/">"Nightmare" icon</a> [image]</li>
                <li><a target="_" href="https://www.google.com/search?hl=en&q=symbol+for+lucid+dreaming&tbm=isch&tbs=simg:CAQSlwEJFKa5262STtEaiwELEKjU2AQaBAgVCAEMCxCwjKcIGmIKYAgDEijhAboCjwLxBsABuwK8AfIBzxLOEv8zuijmNqE0_1TP8M90omj35M8k3GjB4Ombdc9NngbCmz_1Q5Q4lqjVJvPMOtx0mqbWaPg6qOti37rFBXl4X5yu3gg3D4k0UgBAwLEI6u_1ggaCgoICAESBHdgKfgM&sa=X&ved=0ahUKEwiS1f-7ydbaAhVEKo8KHUP2DpgQ2A4IJygB&biw=1280&bih=726">"Lucid dreaming" icon</a> [image]</li>
                <li><a target="_" href="https://thenounproject.com/term/daydreaming/42805/">"Daydreaming" icon</a> [image]</li>
                <li><a target="_" href="https://www.favicon.cc/?action=icon&file_id=900481">Favicon</a> [image]</li>
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