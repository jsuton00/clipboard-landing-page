import React from 'react';
import bgHeader from '../assets/bg/bg-header-desktop.png';
import HeroSection from './HeroSection';

const Header = () => {
	return (
		<div className="header">
			<div className="header-bg-image-container">
				<img
					src={bgHeader}
					alt="header background"
					className="header-bg-image"
				/>
			</div>
			<div className="header-content container">
				<HeroSection />
			</div>
		</div>
	);
};

export default Header;
