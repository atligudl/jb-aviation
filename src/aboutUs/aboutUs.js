import React from 'react';
import styled from 'react-emotion';

import {
	HeroWrapper,
	Hero,
	Section,
	Container,
	H2
} from '../base';
import tail from '../assets/images/tail.jpeg';

const StyledContent = styled('div')`
	text-align: center;
	font-size: 1.8rem;
	line-height: 2.2;
	color: #888;

	h2 {
		margin-bottom: 4.5rem;
	}

	@media(min-width: 1080px) {
		max-width: 1000px;
		margin: 0 auto;
	}
`;

const AboutUs = () => {
	return (
		<div>
			<HeroWrapper>
				<Hero image={tail} paddingTop="50%" />
				{/* <HeroBox>
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
				</HeroBox> */}
			</HeroWrapper>
			<Section padding="12rem 0">
				<Container>
					<StyledContent>
						<H2>About us</H2>
						<div>
							JB Aviations team of highly trained aviation professionals with hand
							on experience specialize in aviation maintenance  and related documents.
							We Provide flexible and cost effective solutions
							JB Aviation  provides technical consultancies and asset management to
							airlines, aircraft financiers, aircraft lessors and aircraft owners.
							The service provided is tailor made to fit each customers needs and financial goals.
							We provide world wide coverage as required.
						</div>
					</StyledContent>
				</Container>
			</Section>
		</div>
	);
};

export default AboutUs;
