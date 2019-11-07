import React from 'react';
import Section from './Section';
import './Sections.scss';
import Fade from 'react-reveal/Fade';
import Card from '../Cards/Card';

const ValuesSection = props => {
    return (
            <div className='ValuesSection row-lg' id = "values">
                <Fade bottom cascade>
                    <Card width="420px" height="200px">
                        <div style={{ fontSize: "70px", fontWeight: "bold" }}>CONCISE</div>
                        Not overcomplicated. Not oversimplifed.
                    </Card>
                    <Card width="420px" height="200px">
                        <div style={{ fontSize: "70px", fontWeight: "bold" }}>REUSABLE</div>
                        Good modularity is key to my process.
                    </Card>
                    <Card width="420px" height="200px">
                        <div style={{ fontSize: "70px", fontWeight: "bold" }}>ELEGANT</div>
                        Smart design on both sides of the fence.
                    </Card>
                    <br /><br />
                </Fade>
            </div>
    );
};

export default ValuesSection;