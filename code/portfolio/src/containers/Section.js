import React from 'react';
import './Section.scss';

const Section = props => {
    return (
        <div className="Section" style={{
            backgroundColor: props.color
        }}>{props.children}</div>
    );
}

export default Section;