import React from 'react';
import './Nav.scss';
import Nav from './Nav';
import github_logo from '../../images/github_logo.png';
import linkedin_logo from '../../images/linkedin_logo.png';
import phone from '../../images/phone.png';
import envelope from '../../images/envelope.png';

const SocialNavBar = props => {
	return (
		<Nav>
			<div className='Nav-Social'>
				<ul>
					<li><span className='mobile'><img src={phone} alt="" /></span>647-221-7265</li>
					<li><span className='envelope'><img src={envelope} alt="" /></span>milan.lastname@outlook.com</li>
					<li><a href='https://www.github.com/milan108' target='_blank' rel="noopener noreferrer"><img src={github_logo} alt="" />milan108</a></li>
					<li><a href = 'https://www.linkedin.com/in/milan-m' target='_blank' rel="noopener noreferrer"><img src={linkedin_logo} alt="" />milan-m</a></li>
				</ul>	
			</div>
		</Nav>	
	);
};

export default SocialNavBar;
