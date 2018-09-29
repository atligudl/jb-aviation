import React from 'react';

import {
	HeroWrapper,
	Hero,
	HeroBox,
	H1,
	Fieldset,
} from '../base';
import image from '../assets/images/plane.jpeg';

const Services = () => {
	return (
		<div>
			<HeroWrapper>
				<Hero image={image} paddingTop="40%" />
				<HeroBox>
					<H1 marginBottom="3rem">
						Services
					</H1>
					<div>
						We offer a wide array of services, including Aircraft Surveyors, Document Auditors, Aviation
						Business Management specialist with extensive hands-on experience in Aviation.
					</div>
					<Fieldset>
						We provide flexible technical support ranging from physical inspections, document audits,
						on-site representation, On time delivery is our goal.
					</Fieldset>
				</HeroBox>
			</HeroWrapper>
		</div>
	);
};

export default Services;
