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
import Button from 'material-ui/Button';
import Sources from './Sources'
import ScrollAnimation from 'react-animate-on-scroll';

export default class SleepTypesPane extends Component {
    render() {
        return (
            <Grid container className='sleepTypes-cover' spacing={0} justify="center">
                <Grid item xs={12} className='vertical-align-content'>
                    <div className='vertical-align-content'>
                        <ScrollAnimation animateIn="fadeIn">
                          <div className='sleep-types-title'>
                              The <strong>Different Kinds</strong> of Dreaming
                          </div>
                        </ScrollAnimation>
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
                            >
                                <TabContent>
                                    <DialogContentText>
                                      Daydreaming is when one gets caught up in their own lucid thoughts.
                                      The dreamer is in a state that's considered to be between asleep and awake. Mentally, the dreamer is "transported" away from whatever the dreamer's current situation is—the dreamer may even forget what they were doing right before the daydream!
                                      <ul>
                                        <li>Daydreams usually last around a minute.</li>
                                        <li>Daydreams usually aren't very symbolic.</li>
                                        <li>Daydreams may make one drool!</li>
                                      </ul>
                                    </DialogContentText>
                                </TabContent>
                                <TabContent>
                                    <DialogContentText>
                                      Daydreams may occur out of the blue, or they may come from pure boredom.
                                      In any case, when a daydream does happen, parts of the brain get shut off.
                                      Our brain naturally cycles through different modes of thinking; during this time,
                                      the analytical and emphathetical parts of the brain tend to turn each other off.
                                      <ul>
                                        <li>The brain—not the mind—controls daydreams.</li>
                                        <li>Daydreams are considered restful moments for our brain!</li>
                                        <li>
                                          Technology, however, may be posing a problem.
                                          Recent studies show a negative correlation between technology use and how much we
                                          may daydream.
                                        </li>
                                      </ul>
                                    </DialogContentText>
                                </TabContent>
                                <TabContent>
                                  <DialogContentText>
                                    Daydreaming is done on purpose, especially when dealing with cognitively easy tasks.
                                    No need to be concerned—there are benefits to daydreaming!
                                    <ul>
                                      <li>Daydreaming motivates people to work towards accomplishing goals.</li>
                                      <li>Daydreaming may distract us from immediate tasks to solve other, more important problems;</li>
                                      <li>Daydreaming boosts creativity.</li>
                                      <li>Daydreaming overall provides a relaxing experience!</li>
                                    </ul>
                                  </DialogContentText>
                                </TabContent>
                            </SleepTypeCard>
                        </Grid>
                        <Grid item className='pane'>
                            <SleepTypeCard
                                image={nightmare}
                                title="Nightmares"
                                description="Ever had a scary dream? For most people, the answer will be yes.
                                It turns out that there are some interesting forces at play—or, you could just
                                be getting older."
                            >
                                <TabContent>
                                  <DialogContentText>
                                    Nightmares are vividly realistic, disturbing dreams that rattle you awake from
                                    a deep sleep. They often set your heart pounding from fear!
                                    While children have it more often, one out of every two adults has a nightmare on occasion.
                                    <ul>
                                      <li>
                                        Nightmares are NOT the same as night terrors,
                                        which are feelings of terror that may occur in the first few hours after falling asleep.
                                        People won't recall why they are terrified upon awakening.
                                      </li>
                                      <li>
                                        Between 2% and 8% of the adult population is plagued by nightmares.
                                      </li>
                                      <li>Nightmares are technically a parasomnia!</li>
                                      <li>Daydreaming overall provides a relaxing experience!</li>
                                    </ul>
                                  </DialogContentText>
                                </TabContent>
                                <TabContent>
                                  <DialogContentText>
                                    There's various causes as to how it happens, including:
                                      <ul>
                                        <li>Withdrawal from medications and substances</li>
                                        <li>Sleep deprivation (which can cause nightmares, which can cause more sleep deprivation!!)</li>
                                        <li>Anxiety or PTSD</li>
                                        <li>Late night snacks</li>
                                        <li>Getting older (nightmares tend to be more concerned with death as we age)</li>
                                        <li>Other sleep disorders like sleep apnea and restless legs syndrome.</li>
                                      </ul>
                                  </DialogContentText>
                                </TabContent>
                                <TabContent>
                                  <DialogContentText>
                                    Nightmares can cause sleep deprivation and psychological distress.
                                    However, they can be treated! Besides making such changes as adjusting prescriptions (if medications are at fault) or dealing with other underlying sleep disorders, one can take part in a variety of habits that will improve sleep and reduce incidence of nightmares!
                                    <ul>
                                      <li>Have a regular wake-sleep schedule.</li>
                                      <li>Engage in regular exercise.</li>
                                      <li>Meditate or do yoga!</li>
                                      <li>Maintain overall sleep hygeine (e.g. be careful with caffeine, don't associate bed with stressful activities).</li>
                                    </ul>
                                  </DialogContentText>
                                </TabContent>
                            </SleepTypeCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subheading' component='h3' align='center'>
                      <ScrollAnimation animateIn="fadeIn" offset={0}>
                        <div className='sleep-types-message'>
                            Made by <a target="_" href="https://sdulal.github.io">Shafqat Dulal</a> and <a target="_" href="http://nimalen.com">Nimalen Sivapalan</a> for the Sleep DeCal. <Sources></Sources>
                        </div>
                      </ScrollAnimation>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}
