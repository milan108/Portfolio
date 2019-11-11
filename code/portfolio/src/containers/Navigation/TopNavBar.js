import Nav from './Nav';
import React, { useState, useEffect } from 'react';
import SocialNavBar from './SocialNavBar';
import './Nav.scss';

const TopNavBar = props => {
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {

        const isMobileDevice = () => {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        };

        const listenScrollEvent = e => {
            if ((window.scrollY > 960 && !isMobileDevice())
                || (window.scrollY > 250 && isMobileDevice)) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        }

        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <Nav>
            <div className='Nav-Top' style={{ backgroundColor: hasBackground ? "#05386b" : "" }}>
                <ul>
                    <li><a href="#Repos">REPOS</a></li>
                    <li><a href="#About">ABOUT</a></li>
                    <li><a href="#Contact">CONTACT</a></li>
                </ul>

                <SocialNavBar />
            </div>
        </Nav>
    );

}

export default TopNavBar;