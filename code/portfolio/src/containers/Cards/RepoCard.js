import React, { useState } from 'react';
import './Cards.scss';

const RepoCard = props => {

    const [hover, setHover] = useState(false);

    return (
        <div className="RepoCard" onMouseEnter={() => { setHover(!hover) }} onMouseLeave={() => { setHover(!hover) }}>
            <img src={props.image} />
            <div className={hover ? "text-box showOverlay" : "text-box hideOverlay"}>
                <br />
                <span className="title">{props.title}</span><br />
                <p>{props.description}</p>
                <a className={hover ? "showButton" : ""} href={props.url} target='_blank' rel="noopener noreferrer">VIEW REPO</a>
            </div>
        </div>
    );
}

export default RepoCard;