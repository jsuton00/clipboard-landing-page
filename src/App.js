import React from 'react';
import AccessClipboardSection from './components/AccessClipboardSection';
import ClipboardForSection from './components/ClipboardForSection';
import Footer from './components/Footer';
import Header from './components/Header';
import KeepTrackSection from './components/KeepTrackSection';
import SuperChargeSection from './components/SuperChargeSection';

const App = () => {
	return (
		<div className="app">
			<Header />
			<main className="main">
				<div className="main-content container">
					<KeepTrackSection />
					<AccessClipboardSection />
					<SuperChargeSection />
					<ClipboardForSection />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default App;
