import React from "react";
import Button from '../../components/Button/Button';
import './landing.scss';



function Landing() {
    return (
        <div className="landing-page">
            <div className="pane1">
                <img className="human1" src='./img/human.png' alt='everyday human' />
                <img className="menacing1" src='./img/menacing.png' alt="menacing kanji"></img>
                <img className="menacing2" src='./img/menacing.png' alt="menacing kanji"></img>
                <img className="menacing3" src='./img/menacing.png' alt="menacing kanji"></img>
                <div className="text">
                    <h1 className='appear-up-0' >Parker, Brendon, and JoJo</h1>
                    <h2 className='appear-up-1' ><b>The</b> JoJo's Bizarre Adventure Watch/Re-watch Podcast</h2>
                    <Button label='Learn More'></Button>
                </div>
            </div>
            <div className="pane2">
                <div className="text">
                    <div className="rift">
                        <img className="vortex-circle" src='./img/vortex-circle.svg'></img>
                        <img className="vortex-star" src='./img/Vortex-Star.svg'></img>
                        <img className="spiral-fire" src='./img/spiral-fire.svg'></img>
                        <img className="microphone" src='./img/microphone.svg'></img>
                        <img className="crow" src='./img/crow.svg'></img>
                    </div>
                    <h2>The perfect reason to watch through JoJo's Bizarre Adventure for the first time or the thirtieth</h2>
                    <div className="people">
                        <p>Parker hase been obsessed with the series for years, reading the manga and watching through the anime several times.</p>
                        <p>Brendon has remained unexposed to the series by living in the shadows since the anime's original release in 2012.</p>
                    </div>
                    <p>When they are brought together in the presence of microphones with the intent to discuss JoJo, an interdimentional rift opens and causes the pair to become an etheral diety whose soul purpose is to entertain.</p>
                </div>
            </div>
            <div className="pane3">
                <div className="episode">
                    <h2>Listen to our Latest Episode:</h2>
                    <div className="latest-episode">
                        <iframe src="https://anchor.fm/pbandjj/embed/episodes/Ranking-Part-1-Part-2-e1e1qnq" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
                    </div>
                </div>
                <div className="social">
                    <h2>Where to Appease the Entertainment Diety:</h2>
                    <div className="social-links">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;