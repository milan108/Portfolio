import React from 'react';
import './Nav.scss';
import github_logo from '../../assets/images/github_logo.png';
import linkedin_logo from '../../assets/images/linkedin_logo.png';

const SocialNavBar = props => {
	return (
			<div className='Nav-Social'>
				<ul>
					<li><a href='https://www.github.com/milan108' target='_blank' rel="noopener noreferrer"><img src={github_logo} alt="" /></a></li>
					<li><a href = 'https://www.linkedin.com/in/milan-m' target='_blank' rel="noopener noreferrer"><img src={linkedin_logo} alt="" /></a></li>
				</ul>	
			</div>
	);
};

export default SocialNavBar;
