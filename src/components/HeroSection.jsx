import React from 'react';
import { DownloadButtonForIOS, DownloadButtonForMac } from './DownloadButtons';

const HeroSection = () => {
	return (
		<>
			<h1 className="hero-brand-logo">&copy;</h1>
			<h1 className="hero-heading-text">A history of everything you copy</h1>
			<p className="hero-text">
				Clipboard allows you to track and organize everything you copy.
				Instantly access your clipboard on all your devices.
			</p>
			<div className="hero-download-row row">
				<div className="hero-download-section download-for-ios">
					<DownloadButtonForIOS />
				</div>

				<div className="hero-download-section download-for-mac">
					<DownloadButtonForMac />
				</div>
			</div>
		</>
	);
};

export default HeroSection;
