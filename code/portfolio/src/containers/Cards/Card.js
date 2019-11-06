import React from 'react';
import './Card.scss';

const Card = props => {
    return (
        <div className="Card" style={{ backgroundColor: props.color, width: props.width, height: props.height }}>
            {props.children}
        </div>
    );
}

export default Card;