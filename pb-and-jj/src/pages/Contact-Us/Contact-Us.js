import React from 'react';
import './Contact-Us.scss';
import Button from '../../components/Button/Button';

function ContactUs(props) {
    return (
        <div className='contact-us'>
            <div className='text'>
                <h1>Contact Us</h1>
                <h2>Feel free to send us an email at:</h2>
                <a href='mailto:pbandjj.contact@gmail.com'>
                    <Button>
                        pbandjj.contact@gmail.com
                    </Button>
                </a>
                <h2>You can also find us on Twitter:</h2>
                <a target='__blank' href='https://twitter.com/PBAndJJPod' className='twitter-info'>
                    <Button>
                        <img src='./img/twitter.svg' alt='Twitter Icon'></img>
                        @PBAndJJPod
                    </Button>
                </a>
                <h2>You can even send us a voice message and we might play it on the show!</h2>
                <p>Don't be shitty if you can help it</p>
                <a target='__blank' href='https://anchor.fm/pbandjj/message'>
                    <Button>
                        Send a Voice Message
                    </Button>
                </a>
            </div>

        </div>
    )
};

export default ContactUs;