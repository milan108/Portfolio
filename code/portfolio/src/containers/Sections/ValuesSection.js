import React from 'react';
import './Sections.scss';
import Fade from 'react-reveal/Fade';
import Card from '../Cards/Card';

const ValuesSection = props => {
    return (
            <div className='ValuesSection row-lg'  id = "values">
                <Fade bottom>
                    <div className="ValueCards">
                        <Card>
                            <span>CONCISE</span><br />
                            Not overcomplicated. Not oversimplifed.
                        </Card>
                        <Card>
                            <span>REUSABLE</span><br />
                            Good modularity is key to my process.
                        </Card>
                        <Card>
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