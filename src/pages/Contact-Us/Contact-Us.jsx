import React from 'react';
import './Contact-Us.scss';
import Button from '../../components/Button/Button';

function ContactUs(props) {
    return (
        <div className='contact-us'>
            <div className='text'>
                <h1 className='appear-up-0'>Contact Us</h1>
                <h2 className='appear-up-1'>Feel free to send us an email at:</h2>
                <a href='mailto:pbandjj.contact@gmail.com'>
                    <Button className='appear-up-1'>
                        pbandjj.contact@gmail.com
                    </Button>
                </a>
                <h2 className='appear-up-2'>You can also find us on Twitter:</h2>
                <a target='__blank' href='https://twitter.com/PBAndJJPod' className='twitter-info'>
                    <Button className='appear-up-2'>
                        <img src='./img/x_logo.svg' alt='Twitter Icon'></img>
                        @PBAndJJPod
                    </Button>
                </a>
            </div>

        </div>
    )
};

export default ContactUs;