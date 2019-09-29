import React from 'react';
import './Title.scss';
import SocialNavBar from '../../containers/Navigation/SocialNavBar';

const Title = props => {
    return (
        <div className="Title">
            Milan Miljkovic,
            <br /><span>Frontend Developer.</span>
	        <SocialNavBar />
        </div>
    );
}

export default Title;
