import React from 'react';

import {
	HeroWrapper,
	Hero,
	HeroBox,
	H1,
	Fieldset,
} from '../base';
import tail from '../assets/images/tail.jpeg';

const AboutUs = () => {
	return (
		<div>
			<HeroWrapper>
				<Hero image={tail} paddingTop="40%" />
				<HeroBox>
					<H1 marginBottom="3rem">
						About Us
					</H1>
					<div>
						We offer a wide array of AboutUs, including Aircraft Surveyors, Document Auditors, Aviation
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

export default AboutUs;
