import React from 'react';
import AboutCard from '../Cards/AboutCard';
import './Sections.scss'

const AboutSection = props => {
    return (
        <div className="AboutSection" id="About">
                <h1>ABOUT</h1>

                <AboutCard />
        </div>

    );
}

export default AboutSection