import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <div className='Footer'>
            <p>Copyright © Brendon Stahl 2026</p>
            <a href='https://twitter.com/PBAndJJPod' target='_blank' rel="noreferrer">
                <img src='./img/x_logo.svg' alt='X Icon'></img>
            </a>
            <a href="mailto:pbandjj.contact@gmail.com">pbandjj.contact@gmail.com</a>
        </div>
    )
};

export default Footer;