import Nav from './Nav';
import React from 'react';
import SocialNavBar from './SocialNavBar';
import './Nav.scss';

const TopNavBar = props => {
    return (
        <Nav>
            <div className = 'Nav-Top'>
                <ul>
                    <li><a href="#About">ABOUT</a></li>
                    <li><a href="#Contact">CONTACT</a></li>
                </ul>

                <SocialNavBar />
            </div>
        </Nav>
    );

}

export default TopNavBar;