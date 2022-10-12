import React from 'react';
import computer from '../assets/img/image-computer.png';

const KeepTrackSection = () => {
	return (
		<div className="page-section keep-track-section">
			<h1 className="page-section-title">Keep track of your snippets</h1>
			<p className="page-section-description">
				Clipboard instantly stores any item you copy in the cloud, meaning you
				can access your snippets immediately on all your devices. Our Mac and
				iOS apps will help you organize everything.
			</p>
			<div className="keep-track-section-row row">
				<div className="keep-track-section-col hero-image-col">
					<img src={computer} alt="computer" className="hero-image-computer" />
				</div>
				<div className="keep-track-section-col extra-info-col">
					<div className="extra-info-container">
						<h3 className="extra-info-title">Quick Search</h3>
						<p className="extra-info-text">
							Easily search your snippets by content, category, web address,
							application, and more.
						</p>
					</div>
					<div className="extra-info-container">
						<h3 className="extra-info-title">iCloud Sync</h3>
						<p className="extra-info-text">
							Instantly saves and syncs snippets across all your devices.
						</p>
					</div>
					<div className="extra-info-container">
						<h3 className="extra-info-title">Complete History</h3>
						<p className="extra-info-text">
							Retrieve any snippets from the first moment you started using the
							app.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KeepTrackSection;
