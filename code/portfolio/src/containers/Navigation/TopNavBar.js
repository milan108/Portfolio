import Nav from './Nav';
import React from 'react';
import SocialNavBar from './SocialNavBar';
import './Nav.scss';

const TopNavBar = props => {
    return (
        <Nav>
            <div className = 'Nav-Top'>
                <ul>
                    <li><a href="#">SUMMARY</a></li>
                    <li><a href="#">TECHNOLOGIES</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>

                <SocialNavBar />
            </div>
        </Nav>
    );

}

export default TopNavBar;