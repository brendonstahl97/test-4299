import React from "react";
import Button from '../../components/Button/Button';
import './landing.scss';
import '../../components/Social-Link/Social-link';
import SocialLink from "../../components/Social-Link/Social-link";



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
                    <h2 className='appear-up-1' ><b>The</b> JoJo's Bizarre Adventure Watch/Re&#8209;Watch Podcast</h2>
                    <a href='#pane2'>
                        <Button label='Learn More'></Button>
                    </a>
                </div>
            </div>
            <div className="pane2" id='pane2'>
                <div className="text">
                    <div className="rift">
                        <img className="vortex-circle" src='./img/vortex-circle.svg'></img>
                        <img className="vortex-star" src='./img/Vortex-Star.svg'></img>
                        <img className="spiral-fire" src='./img/spiral-fire.svg'></img>
                        <img className="microphone" src='./img/microphone.svg'></img>
                        <img className="crow" src='./img/crow.svg'></img>
                    </div>
                    <h2>The perfect reason to watch through JoJo's Bizarre Adventure for the first time or the fifteenth</h2>
                    <div className="people">
                        <p>Parker hase been obsessed with the series for years, reading the manga and watching through the anime several times.</p>
                        <p>Brendon has remained unexposed to the series by living in the shadows since the anime's original release in 2012.</p>
                    </div>
                    <p>When they are brought together in the presence of microphones with the intent to discuss JoJo, an interdimentional rift opens and causes the pair to become an etheral diety whose sole purpose is to keep listeners engaged for the length of the episode</p>
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
                        <div className="col1">
                            <SocialLink img='https://d12xoj7p9moygp.cloudfront.net/images/podcast/logo-square/006/apple_podcasts.png' label='Apple Podcasts' link='https://podcasts.apple.com/us/podcast/parker-brendon-and-jojo/id1596781845'></SocialLink>
                            <SocialLink img='https://d12xoj7p9moygp.cloudfront.net/images/podcast/logo-square/006/google_podcasts.png' label='Google Podcasts' link='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xNDViZTAzYy9wb2RjYXN0L3Jzcw'></SocialLink>
                            <SocialLink img='./img/rss.png' label='Copy RSS Feed'></SocialLink>
                        </div>
                        <div className="col2">
                            <SocialLink img='https://d12xoj7p9moygp.cloudfront.net/images/podcast/logo-square/006/spotify.png' label='Spotify' link='https://open.spotify.com/show/1S5SYWaZfj41svKhQhXFzt'></SocialLink>
                            <SocialLink img='https://d12xoj7p9moygp.cloudfront.net/images/podcast/logo-square/006/radiopublic.png' label='Radio Public' link='https://radiopublic.com/parker-brendon-and-jojo-6nmo2q'></SocialLink>
                            <SocialLink img='./img/twitter.svg' label='Twitter' link='https://twitter.com/PBAndJJPod'></SocialLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;