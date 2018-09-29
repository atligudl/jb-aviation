import React from 'react';
import styled from 'react-emotion';

import { Link } from 'react-router-dom';
import { Container, Columns, Column, H1, Button } from '../base';

const breakpoints = [1, 1, 0.5];

const StyledShowcaseSection = styled('div')`
	position: relative;
	margin: 18rem 0;
`;

const Image = styled('div')`
	position: absolute;
	top: 0;
	left: ${props => (props.side === 'right' ? 'auto' : 0)};
	right: ${props => (props.side === 'right' ? 0 : 'auto')};
	width: calc((${props => props.theme.sizes.pageMaxWidth} * 0.5) + ((100% - ${props => props.theme.sizes.pageMaxWidth}) / 2));
	height: 100%;
	background-image: url(${props => props.image});
	background-size: cover;
	background-position: 50% 50%;
`;

const Content = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	padding: 12rem;
	padding-left: ${props => (props.imageSide === 'right' ? 0 : '6rem')};
	padding-right: ${props => (props.imageSide === 'right' ? '12rem' : 0)};
`;

const Text = styled('div')`
	font-size: 1.8rem;
	color: ${props => props.theme.colors.gray};
`;

const ButtonWrapper = styled('div')`
	display: flex;
	margin-top: 3rem;
`;

const ShowcaseSection = ({ image, imageSide }) => {
	return (
		<StyledShowcaseSection>
			<Container>
				<Columns>
					<Column width={breakpoints} order={imageSide === 'right' ? 1 : 2}>
						<Content imageSide={imageSide}>
							<H1 marginBottom="4.5rem">Aircraft maintenance & consulting</H1>
							<Text>
								We are a team of professionals, including Aircraft Surveyors, Document Auditors, Aviation
								Business Management specialist with extensive hands-on experience in Aviation.
								We provide flexible technical support ranging from physical inspections, document audits,
								on-site representation, On time delivery is our goal.
							</Text>
							<ButtonWrapper>
								<Link to="/">
									<Button primary="true">Read more</Button>
								</Link>
							</ButtonWrapper>
						</Content>
					</Column>
					<Column width={breakpoints} order={imageSide === 'right' ? 2 : 1}></Column>
				</Columns>
			</Container>
			<Image image={image} side={imageSide} />
		</StyledShowcaseSection>
	);
};

export default ShowcaseSection;
