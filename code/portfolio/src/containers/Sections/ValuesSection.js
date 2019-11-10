import React from 'react';
import './Sections.scss';
import Slide from 'react-reveal/Slide';
import Card from '../Cards/Card';

const ValuesSection = props => {
    return (
            <div className='ValuesSection row-lg'  id = "values">
                <Slide bottom>
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
                </Slide>
            </div>
    );
};

export default ValuesSection;