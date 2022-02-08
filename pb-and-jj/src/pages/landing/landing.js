import React from "react";
import Button from '../../components/Button/Button';
import './landing.scss';



function Landing() {
    return (
        <div className="landing-page">
            <img className="human1" src='./img/human.png' alt='everyday human' />
            <img className="menacing1" src='./img/menacing.png' alt="menacing kanji"></img>
            <img className="menacing2" src='./img/menacing.png' alt="menacing kanji"></img>
            <img className="menacing3" src='./img/menacing.png' alt="menacing kanji"></img>
            <div className="text">
                <h1>Parker, Brendon, and JoJo</h1>
                <h2>The JoJo's Bizarre Adventure Watch/Re-watch Podcast</h2>
                <Button label='Learn More'></Button>
            </div>

        </div>
    );
}

export default Landing;