import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
    return (
        <section className='sidebar'>
            <h1>PB&JJ</h1>
            <ul>
                <li>
                    <Link className='navLink' to='/about'>About</Link>
                </li>
                <li>
                    <Link className='navLink' to='rankings'>Episode Rankings</Link>
                </li>
                <li>
                    <Link className='navLink' to='/contact-us'>Contact Us</Link>
                </li>
            </ul>

            <div className='mobile-menu-btn'>
                <span className='material-icons'>menu</span>
            </div>

        </section>
    );
};

export default Sidebar;