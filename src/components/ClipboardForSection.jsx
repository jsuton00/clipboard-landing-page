import React from 'react';
import { DownloadButtonForIOS, DownloadButtonForMac } from './DownloadButtons';

const ClipboardForSection = () => {
	return (
		<div className="page-section clipboard-for-section">
			<h1 className="page-section-title">Clipboard for iOS and Mac OS</h1>
			<p className="page-section-description">
				Available for free on the App Store. Download for Mac or iOS, sync with
				iCloud and you’re ready to start adding to your clipboard.
			</p>
			<div className="hero-download-row row">
				<div className="hero-download-section download-for-ios">
					<DownloadButtonForIOS />
				</div>

				<div className="hero-download-section download-for-mac">
					<DownloadButtonForMac />
				</div>
			</div>
		</div>
	);
};

export default ClipboardForSection;
