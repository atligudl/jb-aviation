import React from 'react';
import styled from 'react-emotion';
import { faPlaneArrival, faCarBattery } from '@fortawesome/free-solid-svg-icons';

import {
	HeroWrapper,
	Hero,
	Container,
	H2,
	Ul, Li,
	Section
} from '../base';
import image from '../assets/images/plane.jpeg';
import ServiceList from '../serviceList/serviceList';
import aircrafts from './aircrafts';
import engines from './engines';

const aircraftsTitle = 'JB Aviation has during the last 20 years physically inspected and audited the following aircrafts';
const enginesTitle = 'JB Aviation has during the last 20 years physically inspected and audited the following engine types';

const StyledContent = styled('div')`
	text-align: center;
	font-size: 1.8rem;
	line-height: 2.2;
	color: #888;

	h2 {
		margin-bottom: 4.5rem;
	}
`;

const Services = () => {
	return (
		<div>
			<HeroWrapper>
				<Hero image={image} paddingTop="50%" />
				{/* <HeroBox>
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
				</HeroBox> */}
			</HeroWrapper>
			<Section padding="12rem 0">
				<Container>
					<StyledContent>
					<H2>Our Aviation and Maintenance consultancy services include</H2>
					<div>Pre-purchase physical surveys of both airframe and engines including Borescoe inspections,  full or partial document audit as required.</div>
					<div>Asset Management including annual audits both physical and document.</div>
					<div>Complete aircraft physical inspections & record reviews</div>
					<div>Delivery/re-delivery Project Management for airlines and leasing companies</div>
					<div>Maintenance check work-scope development and supervision of checks</div>
					<div>Conformity Compliance audit for import/export </div>
					<div>Contract review for Aircraft or Engine purchase, leasing and/or maintenance visits</div>
					<div>Heavy maintenance, modification and bridging check on-site supervision </div>
					<div>Aircraft and Engine spare part sourcing </div>
					<div>Determined to provide on time first class maintenance and document support when managing  aircraft projects, deliver value for money.</div>
					</StyledContent>
				</Container>
			</Section>
			<Section padding="12rem 0">
				<Container>
					<ServiceList title={aircraftsTitle} items={aircrafts} icon={faPlaneArrival} />
				</Container>
			</Section>
			<Section padding="0 0 12rem 0">
				<Container>
					<ServiceList title={enginesTitle} items={engines} icon={faCarBattery} />
				</Container>
			</Section>
		</div>
	);
};

export default Services;
