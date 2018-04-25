import React, { Component } from 'react';
import Card, {CardActions, CardMedia, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './SleepTypeCard.css';
import SleepTypeDialog from './SleepTypeDialog';

export default class SleepTypeCard extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    mouseOut = () => {
        this.setState({ raised: false });
    };

    mouseOver = () => {
        this.setState({ raised: true })
    };

    render() {
        return (
            <Card
                className='card-in-grid'
                raised={this.state.raised}
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
            >
                <div className='card-media-container'>
                    <CardMedia
                        className='card-media-image'
                        image={this.props.image}/>
                </div>
                <CardContent className='card-content'>
                    <Typography gutterBottom={true} variant="headline" component="h1" align="center">
                        {this.props.title}
                    </Typography>
                    <Typography component="p" paragraph={true} align="justify">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions className='card-actions'>
                    <Button size="large" color="primary" variant="raised" onClick={this.handleClickOpen}>
                        Learn More
                    </Button>
                    <SleepTypeDialog open={this.state.open} onClose={this.handleClose}>
                        {this.props.children}
                    </SleepTypeDialog>
                </CardActions>
            </Card>
        );
    }
}
