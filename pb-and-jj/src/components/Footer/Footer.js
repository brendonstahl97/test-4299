import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <div className='Footer'>
            <p>Copyright © Brendon Stahl 2022</p>
            <a href='https://twitter.com/PBAndJJPod' target='_blank'>
                <img src='./img/twitter.svg' alt='Twitter Icon'></img>
            </a>
            <a href="mailto:pbandjj.contact@gmail.com">pbandjj.contact@gmail.com</a>
        </div>
    )
};

export default Footer;