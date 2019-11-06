import React from 'react';
import Section from './Section';
import Particles from 'react-particles-js';
import ParticleConfig from '../../assets/particles.json';
import './Section.scss';

const ParticleSection = props => {

    return (
        <Section color="#05386b">
            <div className="ParticleSection">
                <Particles params={ParticleConfig} />
                {props.children}
            </div>
        </Section>

    );
};

export default ParticleSection;