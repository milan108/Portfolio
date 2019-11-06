import Nav from './Nav';
import React from 'react';
import SocialNavBar from './SocialNavBar';
import './Nav.scss';

const TopNavBar = props => {
    return (
        <Nav>
            <div className='Nav-Top'>
                <SocialNavBar />
            </div>
        </Nav>
    );

}

export default TopNavBar;