import React from 'react';
import './Nav.scss';
import Nav from './Nav';

const SocialNavBar = props => {
	return (
		<Nav>
			<div className='Nav-Social'>
				<ul>
					<li>647-221-7265</li>
					<li>milan.lastname@outlook.com</li>
					<li>milan108</li>
					<li>milan-m</li>
				</ul>	
			</div>
		</Nav>
	);
};

export default SocialNavBar;
