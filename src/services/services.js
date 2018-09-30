import React from 'react';
import { faPlaneArrival, faCarBattery } from '@fortawesome/free-solid-svg-icons';

import {
	HeroWrapper,
	Hero,
	HeroBox,
	H1,
	Fieldset,
	Container,
	Section
} from '../base';
import image from '../assets/images/plane.jpeg';
import ServiceList from '../serviceList/serviceList';
import aircrafts from './aircrafts';
import engines from './engines';

const aircraftsTitle = 'JB Aviation has during the last 20 years physically inspected and audited the following aircrafts';
const enginesTitle = 'JB Aviation has during the last 20 years physically inspected and audited the following engine types';

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
