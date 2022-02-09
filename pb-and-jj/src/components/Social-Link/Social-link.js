import React, { useState } from 'react';
import './Social-link.scss';

function SocialLink(props) {

    const [open, setOpen] = useState(false);



    return (
        <a target='__blank' href={props.link} className={(open ? 'open' : '') + ' socialLink'} onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }}>
            <div className='data'>
                <img src={props.img} alt={props.label}></img>
                <p>{props.label}</p>
            </div>
        </a>
    );
};

export default SocialLink;