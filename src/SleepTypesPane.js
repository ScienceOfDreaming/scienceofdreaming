import React, { Component } from 'react';
import lucid_dream from './img/lucid_dream.png';
import nightmare from './img/nightmare.png';
import daydream from './img/daydream.png';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './SleepTypesPane.css';
import SleepTypeCard from './SleepTypeCard';

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
                            <SleepTypeCard
                                image={lucid_dream}
                                title="Lucid Dreaming"
                                description="Control your dreams!"
                            />
                        </Grid>
                        <Grid item className='pane'>
                            <SleepTypeCard
                                image={daydream}
                                title="Daydreaming"
                                description="Are you wondering about something so much that it feels...real?"
                            />
                        </Grid>
                        <Grid item className='pane'>
                            <SleepTypeCard
                                image={nightmare}
                                title="Nightmares"
                                description="'Why are my dreams so scary :-('"
                            />
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
