import React from 'react';
import './Sections.scss';

const ValuesSection = props => {
    return (
        <div className='ValuesSection row-lg' id="values">
                <div className="Values">
                    <div className="Value">
                        <span>CONCISE</span><br />
                        Not overcomplicated. Not oversimplifed.
                        </div>
                    <div className="Value">
                        <span>REUSABLE</span><br />
                        Good modularity is key to my process.
                        </div>
                    <div className="Value">
                        <span>ELEGANT</span><br />
                        Smart design on both sides of the fence.
                        </div>
                    <br /><br />
                </div>
        </div>
    );
};

export default ValuesSection;