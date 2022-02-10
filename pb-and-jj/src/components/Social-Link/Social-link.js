import React, { useState } from 'react';
import './Social-link.scss';

function SocialLink(props) {

    const [open, setOpen] = useState(false);

    const handleClick = (e, RSSLink) => {
        e.preventDefault();
        navigator.clipboard.writeText(RSSLink);
    };

    return (
        <a target='__blank' href={props.rss ? '' : props.link} className={(open ? 'open' : '') + ' socialLink'} onMouseEnter={() => { setOpen(true) }} onMouseLeave={() => { setOpen(false) }} onClick={props.rss ? (e) => handleClick(e, props.link) : ''}>
            <div className='data'>
                <img src={props.img} alt={props.label}></img>
                <p>{props.label}</p>
            </div>
        </a>
    );
};

export default SocialLink;