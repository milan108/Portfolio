import React from 'react';
import Section from './Section';
import Particles from 'react-particles-js';
import ParticleConfig from '../../assets/particles.json';
import './Sections.scss';

const ParticleSection = props => {

    return (
            <div className="ParticleSection">
                <Particles className="Particles" params={ParticleConfig} />
                {props.children}
            </div>
    );
};

export default ParticleSection;