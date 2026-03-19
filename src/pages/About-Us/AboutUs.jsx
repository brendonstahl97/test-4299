import React from 'react';
import './AboutUs.scss';

function AboutUs(props) {
    return (
        <div className='about-us'>
            <h1 className='appear-up-0'>About Us</h1>
            <div className='PandB'>
                <div className='Parker appear-up-1'>
                    <h2>Meet Parker:</h2>
                    <p>Parker is an anime lover with a particular affinity with JoJo’s Bizarre Adventure. Over the last several years, he has gone on a deep dive into the series. While watching all of the currently released parts of the anime and catching up with the manga. He decided that his friend Brendon needed to take the time to watch and enjoy the series as much as him. He tried to convince Brendon to watch the anime for quite some time to no avail.</p>
                </div>

                <div className='Brendon appear-up-2'>
                    <h2>Meet Brendon:</h2>
                    <p>Brendon is a casual anime watcher and music enthusiast. With a love of 70’s progressive rock and a weak conviction, naturally he was a perfect target for Parker and his unending persuasion. After ignoring his friend for years, he finally decided to watch JoJo’s Bizarre Adventure. After watching the first few episodes, he felt the opportunity to discuss the series with Parker was too good to pass up.</p>
                </div>
            </div>
            <div className='jj appear-up-3'>
                <p>Thus begins Parker, Brendon, and JoJo, or PB&JJ for short. A simple podcast with the goal to combine the contrasting perspectives of Parker and Brendon in an effort to give both newcomers to the series and JoJo addicts a group to watch the series with on a weekly basis.</p>
                <p>...Also the dimensional rift stuff.</p>
            </div>
        </div>
    )
};

export default AboutUs;