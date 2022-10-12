import React from 'react';
import { footerNavlinks } from '../constants/footerNavlinks';
import facebook from '../assets/icons/icon-facebook.svg';
import twitter from '../assets/icons/icon-twitter.svg';
import instagram from '../assets/icons/icon-instagram.svg';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-row container row">
				<div className="footer-navbar">
					<div className="footer-navbar-brand">
						<h1 className="footer-navbar-brand-logo">&copy;</h1>
					</div>
					<div className="footer-navbar-navlinks">
						{footerNavlinks.length > 0 &&
							footerNavlinks.map((navlink) => {
								return (
									<div key={navlink} className="footer-navbar-navlink">
										{navlink}
									</div>
								);
							})}
					</div>
				</div>
				<div className="footer-social-media row">
					<div className="footer-social-media-button">
						<img src={facebook} alt="Facebook" />
					</div>
					<div className="footer-social-media-button">
						<img src={twitter} alt="Twitter" />
					</div>
					<div className="footer-social-media-button">
						<img src={instagram} alt="Instagram" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
