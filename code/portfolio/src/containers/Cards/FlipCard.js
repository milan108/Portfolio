import React, { useState } from 'react';
import Card from './Card';
import './Card.scss';

const FlipCard = props => {

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Card color='#0c00ff'>
            <div className={isFlipped ? "FlipCard FlipCard-flipped" : "FlipCard"} onClick={() => setIsFlipped(!isFlipped)}>
                <div className="FlipCard-front">
                    <h3>React</h3>
                </div>
                <div class="FlipCard-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </Card>
    );
}

export default FlipCard;