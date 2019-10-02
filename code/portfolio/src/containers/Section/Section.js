import React from 'react';
import './Section.scss';

const Section = props => {
    return (
        <div className={props.type !== 'no-padding' ? 'Section' : 'Section no-padding'} style={{
            backgroundColor: props.color
        }}>{props.children}</div>
    );
}

export default Section;