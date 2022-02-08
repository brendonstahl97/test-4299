import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
    return (
        <section className='sidebar'>
            <div className='mobile-menu-btn mobile-btn'>
                <span className='material-icons'>menu</span>
            </div>
            <nav>
                <Link className='logo navLink' to='/'>PB&JJ</Link>
                <ul>
                    <li>
                        <Link className='navLink' to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link className='navLink' to='/ranked-lists'>Episode Rankings</Link>
                    </li>
                    <li>
                        <Link className='navLink' to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <div className='mobile-close-btn mobile-btn'>
                            <span className='material-icons'>close</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Sidebar;