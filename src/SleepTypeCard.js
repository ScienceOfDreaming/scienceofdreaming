import React, { Component } from 'react';
import Card, {CardActions, CardMedia, CardContent, CardTitle} from 'material-ui/Card';
import lucid_dream from './img/lucid_dream.png';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export default class SleepTypeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Card className='card-in-grid'>
                <div className='card-media-container'>
                    <CardMedia
                        className='card-media-image'
                        image={this.props.image}/>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography component="p">
                        {this.props.description}
                    </Typography>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        );
    }
}
