import React from 'react';
import {
	superChargeBrands,
	superChargeList,
} from '../constants/superChargeLists';

const SuperChargeSection = () => {
	return (
		<div className="page-section super-charge-section">
			<h1 className="page-section-title">Supercharge your workflow</h1>
			<p className="page-section-description">
				We’ve got the tools to boost your productivity.
			</p>
			<div className="super-charge-row row">
				{superChargeList.length > 0 &&
					superChargeList.map((superCharge) => {
						return (
							<div key={superCharge.title} className="super-charge-card card">
								<div className="super-charge-card-img top-card-img">
									<img src={superCharge.image} alt={superCharge.title} />
								</div>
								<div className="super-charge-card-body card-body">
									<h5 className="super-charge-card-title card-title">
										{superCharge.title}
									</h5>
									<p className="super-charge-card-text card-text">
										{superCharge.description}
									</p>
								</div>
							</div>
						);
					})}
			</div>
			<div className="super-charge-brand-row row">
				{superChargeBrands.length > 0 &&
					superChargeBrands.map((brands) => {
						return (
							<div key={brands.altText} className="super-charge-brand">
								<img
									src={brands.image}
									alt={brands.altText}
									className="super-charge-brand-image"
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default SuperChargeSection;
