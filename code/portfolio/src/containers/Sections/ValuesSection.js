import React from 'react';
import './Sections.scss';
import Slide from 'react-reveal/Slide';

const ValuesSection = props => {
    return (
            <div className='ValuesSection row-lg'  id = "values">
                <Slide bottom>
                    <div className="Values">
                        <div className = "Value">
                            <span>CONCISE</span><br />
                            Not overcomplicated. Not oversimplifed.
                        </div>
                        <div className = "Value">
                            <span>REUSABLE</span><br />
                            Good modularity is key to my process.
                        </div>
                        <div className = "Value">
                            <span>ELEGANT</span><br />
                            Smart design on both sides of the fence.
                        </div>
                        <br /><br />
                    </div>
                </Slide>
            </div>
    );
};

export default ValuesSection;