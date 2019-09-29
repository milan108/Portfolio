import React from 'react';
import './Nav.scss';
import Nav from './Nav';
import github_logo from '../../images/github_logo.png';
import linkedin_logo from '../../images/linkedin_logo.png';
import mobile from '../../images/mobile.png';
import envelope from '../../images/envelope.png';

const SocialNavBar = props => {
	return (
		<Nav>
			<div className='Nav-Social'>
				<ul>
					<li><span className='mobile'><img src={mobile} alt="" /></span>647-221-7265</li>
					<li><span className='envelope'><img src={envelope} alt="" /></span>milan.lastname@outlook.com</li>
					<li><img src={github_logo} alt="" />milan108</li>
					<li><img src={linkedin_logo} alt="" />milan-m</li>
				</ul>	
			</div>
		</Nav>
	);
};

export default SocialNavBar;
