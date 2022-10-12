import React from 'react';
import devices from '../assets/img/image-devices.png';

const AccessClipboardSection = () => {
	return (
		<div className="page-section access-clipboard-section">
			<h1 className="page-section-title">Access Clipboard anywhere</h1>
			<p className="page-section-description">
				Whether you’re on the go, or at your computer, you can access all your
				Clipboard snippets in a few simple clicks.
			</p>
			<div className="access-clipboard-section-row row">
				<img src={devices} alt="devices" className="hero-image-devices" />
			</div>
		</div>
	);
};

export default AccessClipboardSection;
