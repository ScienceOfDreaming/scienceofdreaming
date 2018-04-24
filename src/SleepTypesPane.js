import React, { Component } from 'react';
import lucid_dream from './img/lucid_dream.png';
import nightmare from './img/nightmare.png';
import daydream from './img/daydream.png';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import './SleepTypesPane.css';
import SleepTypeCard from './SleepTypeCard';
import { TabContent } from './SleepTypeDialog';
import {
  DialogContentText
} from 'material-ui/Dialog';

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
                            >
                                <TabContent>
                                    <DialogContentText>
                                  Lucid dreaming is when one is conscious that one is dreaming.
                                  While there exists much literature on lucid dreaming as far back as
                                  ancient times, the first scientific evidence for it was found by
                                  Keith Hearne in 1975 by catching pre-determined conscious eye movements
                                  in volunteers who were in REM sleep! Today, it is accepted as a real,
                                  safe, and natural state.
                                      <ul>
                                        <li>The extent to which one can control lucid dreams is not fully defined.</li>
                                        <li>People have used lucid dreams to improve physical skills (like archery)!</li>
                                      </ul>
                                    </DialogContentText>
                                </TabContent>
                                <TabContent>
                                    <DialogContentText>
                                      Lucid dreams occur usually by having someone notice that something is off within the dream, which will let them figure out that they're in a dream—leading to consciousness while dreaming!
                                      The scientific mechanism for this is not fully understood yet. Dr. Matthew Walker (Berkeley) theorizes that the lateral prefontal cortex (the logic-dealing part of the brain) wakes up during the dream state to let the dreamer be "aware" of the dream!
                                        <ul>
                                            <li>Another 'natural' way one may enter a lucid dream: one wakes up in the middle of the night, then falls back asleep with little break in consciousness, thereby giving the dreamer a chance to achieve consciousness as they go into a dream.</li>
                                            <li>
                                              A wide variety of techniques exist for inducing lucid dreams!
                                              <ul>
                                                <li>MILD (Mnemonic Induced Lucid Dreaming) - Wake up, note details of dream, then fall back to sleep while staying consciousness.</li>
                                                <li>WILD (Wake Induced Lucid Dreaming) - Become relaxed, focus on particular visualizations while falling asleep.
                                                </li>
                                              </ul>
                                            </li>
                                        </ul>
                                    </DialogContentText>
                                </TabContent>
                                <TabContent>
                                  <DialogContentText>
                                    Lucid dreaming is safe to do often, and it can be learned as a skill. There are entire courses dedicated to learning the techniques needed to reliably enter lucid dreams often!
                                    <ul>
                                    <li>In addition to learning such techniques as MILD and WILD, lucid dreaming as a skill typically involves the following practices:
                                      <ul>
                                        <li>
                                          Dream journaling - record your dreams everyday. This information can be used to identify patterns within one's own dreams which may indicate that one is in a dream (e.g. certain kinds of places or things keep showing up in dreams)
                                        </li>
                                        <li>
                                          Reality checks - check things around oneself habitually to see if anything is off (e.g. time on the clock is strange or moves in an irregular fashion).
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      Lucid dreaming can change people in good ways!
                                      <ul>
                                        <li>German scientists found that the area of the brain responsible for self-reflection is significantly larger among lucid dreamers!</li>
                                        <li>
                                          People can practice real skills in dreams to become better at them in real life!
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                  </DialogContentText>
                                </TabContent>
                            </SleepTypeCard>
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
