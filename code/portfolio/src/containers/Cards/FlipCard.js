import React, { useState } from 'react';
import Card from './Card';
import './Card.scss';

const FlipCard = props => {

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Card color='transparent' width={props.width} height={props.height}>
            <div className={isFlipped ? "FlipCard FlipCard-flipped" : "FlipCard"} onClick={() => setIsFlipped(!isFlipped)}>
                {props.children}
            </div>
        </Card>
    );
}

export default FlipCard;