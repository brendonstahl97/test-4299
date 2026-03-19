import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar(props) {

    const [open, setOpen] = useState(false);

    const handleMobileLinkClick = () => {
        if (!open) { return; };
        setOpen(false);
    };

    return (
        <section className='sidebar'>
            <nav className={open ? 'mobile-open' : ''}>
                <Link className='logo navLink' to='/' onClick={() => !open ? '' : setOpen(!open)}>PB&JJ</Link>
                <ul>
                    <li>
                        <Link className='navLink' to='/about' onClick={() => !open ? '' : setOpen(!open)}>About Us</Link>
                    </li>
                    <li>
                        <Link className='navLink' to='/ranked-lists' onClick={() => !open ? '' : setOpen(!open)}>Episode Rankings</Link>
                    </li>
                    <li>
                        <Link className='navLink' to='/contact' onClick={() => !open ? '' : setOpen(!open)}>Contact Us</Link>
                    </li>
                </ul>
                <div className='mobile-close-btn mobile-btn'>
                    <span className='material-icons'>close</span>
                </div>
                <div className='mobile-menu-btn mobile-btn' onClick={() => setOpen(!open)}>
                    <span className='material-icons'>menu</span>
                </div>

            </nav>

        </section>
    );
};

export default Sidebar;