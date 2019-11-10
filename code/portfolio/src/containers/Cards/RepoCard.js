import React from 'react';
import Card from './Card';
import './Card.scss';

const RepoCard = props => {
    return (
        <Card>
            <div className="RepoCard">
                <img src={props.image} />
            </div>
        </Card>
    );
}

export default RepoCard;