import React, { Component } from 'react';
import Card, {CardMedia, CardTitle} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './SleepTypesPane.css';

export default class SleepTypesPane extends Component {
    render() {
        return (
            <Grid container className='section' spacing={0} justify="center">
                <Grid item xs={12}>
                    <div> The Different Kinds of Dreaming </div>
                </Grid>
                <Grid item className={'panes'}>
                    <Grid container>
                        <Grid item className='pane'>
                            <Card className='card-in-grid'>
                                Hello
                            </Card>
                        </Grid>
                        <Grid item className='pane'>
                            <Card className='card-in-grid'>Hello</Card>
                        </Grid>
                        <Grid item className='pane'>
                            <Card className='card-in-grid'>Hello</Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div> There are various different types of dreaming.
                    Click on each pane to check out the different types!</div>
                </Grid>
            </Grid>
        )
    }
}
