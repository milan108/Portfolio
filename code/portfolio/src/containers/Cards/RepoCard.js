import React from 'react';
import './Cards.scss';

const RepoCard = props => {
    return (
        <div className="RepoCard">
            <img src={props.image} />
        </div>
    );
}

export default RepoCard;