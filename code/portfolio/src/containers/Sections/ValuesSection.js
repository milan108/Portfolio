import React from 'react';
import Section from './Section';
import './Sections.scss';
import Fade from 'react-reveal/Fade';
import Card from '../Cards/Card';

const ValuesSection = props => {
    return (
            <div className='ValuesSection row-lg'  id = "values">
                <Fade bottom>
                    <div className="ValueCards">
                        <Card width="420px" height="100px">
                            <span>CONCISE</span><br />
                            Not overcomplicated. Not oversimplifed.
                        </Card>
                        <Card width="420px" height="100px">
                            <span>REUSABLE</span><br />
                            Good modularity is key to my process.
                        </Card>
                        <Card width="420px" height="100px">
                            <span>ELEGANT</span><br />
                            Smart design on both sides of the fence.
                        </Card>
                        <br /><br />
                    </div>
                </Fade>
            </div>
    );
};

export default ValuesSection;