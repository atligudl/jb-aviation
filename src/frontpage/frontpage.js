import React from 'react';

import {
	HeroWrapper,
	Hero,
	HeroBox,
	H2,
	Fieldset
} from '../base';
import image from '../assets/images/B777-cropped.jpeg';
import ShowcaseSection from '../showcaseSection/showcaseSection';
import engine from '../assets/images/engine.jpg';
import tail from '../assets/images/tail.jpeg';
import * as frontpageContent from './content';

const Frontpage = () => {
	return (
		<div>
			<HeroWrapper>
				<Hero image={image} paddingTop="40%" />
				<HeroBox>
					<H2 marginBottom="3rem">
						We bring customized and affordable solutions to Aviation Maintenance and Management.
					</H2>
					<div>
						We are a team of professional Aircraft Surveyors, Document Auditors
						and Aviation Business Management specialist with extensive hands-on experience in General Aviation.
					</div>
					<Fieldset>
						We provide flexible technical support ranging from physical inspections,
						document audits, on-site representation during heavy checks, modifications, Lease / End of Lease Project management.
						Maintenance Planning and Logistic support.
						On time and budget delivery is our goal.
					</Fieldset>
				</HeroBox>
			</HeroWrapper>
			<ShowcaseSection
				title={frontpageContent.showcase1Title}
				text={frontpageContent.showcase1Text}
				image={tail}
				imageSide="left"
				url="/services"
			/>
			<ShowcaseSection
				title={frontpageContent.showcase2Title}
				text={frontpageContent.showcase2Text}
				image={engine}
				imageSide="right"
				url="/about-us" />
		</div>
	);
};

export default Frontpage;
