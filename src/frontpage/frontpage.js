import React from 'react';

import {
	HeroWrapper,
	Hero,
	HeroBox,
	H1,
	Fieldset
} from '../base';
import image from '../assets/images/B777-cropped.jpeg';

const Frontpage = () => {
	return (
		<div>
			<HeroWrapper>
				<Hero image={image} paddingTop="40%" />
				<HeroBox>
					<H1 marginBottom="3rem">
						Bringing solutions to aviation
					</H1>
					<div>
						We are a team of professionals, including Aircraft Surveyors, Document Auditors, Aviation
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

export default Frontpage;
