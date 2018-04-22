import React, { Component } from 'react';
import lucid_dream from './img/lucid_dream.png';
import nightmare from './img/nightmare.png';
import daydream from './img/daydream.png';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import './SleepTypesPane.css';
import SleepTypeCard from './SleepTypeCard';

export default class SleepTypesPane extends Component {
    render() {
        return (
            <Grid container className='section' spacing={0} justify="center">
                <Grid item xs={12} className='vertical-align-content'>
                    <div className='vertical-align-content'>
                        <div className='sleep-types-title'>
                            The Different Kinds of Dreaming
                        </div>
                    </div>
                </Grid>
                <Grid item className={'panes'}>
                    <Grid container>
                        <Grid item className='pane'>
                            <SleepTypeCard
                                image={lucid_dream}
                                title="Lucid Dreaming"
                                description="Once doubted to even exist, lucid dreaming offers an experience
                                that no other type of dreaming can: the power to control your dreams!"
                            />
                        </Grid>
                        <Grid item className='pane'>
                            <SleepTypeCard
                                image={daydream}
                                title="Daydreaming"
                                description="Are you wondering about something so much that it feels...real?
                                How does one dream yet at the same time isn't fully asleep?"
                            />
                        </Grid>
                        <Grid item className='pane'>
                            <SleepTypeCard
                                image={nightmare}
                                title="Nightmares"
                                description="Ever had a scary dream? For most people, the answer will be yes.
                                It turns out that there are some interesting forces at play—or, you could just
                                be getting older."
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subheading' component='h3' align='center'>
                        <div className='sleep-types-message'>
                            There are various different types of dreaming.
                            Click on each pane to check out the different types!
                        </div>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}
