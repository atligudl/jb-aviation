import React from 'react';
import styled from 'react-emotion';

import { Link } from 'react-router-dom';
import { Container, Columns, Column, H1, Button } from '../base';

const breakpoints = [1, 1, 0.5];

const StyledShowcaseSection = styled('div')`
	position: relative;
	margin-bottom: 6rem;

	@media(min-width: 768px) {
		margin: 18rem 0;
	}
`;

const Image = styled('div')`
	margin-bottom: 5rem;
	padding-top: 60%;
	background-image: url(${props => props.image});
	background-size: cover;
	background-position: 50% 50%;

	@media(min-width: 768px) {
		position: absolute;
		top: 0;
		left: ${props => (props.side === 'right' ? 'auto' : 0)};
		right: ${props => (props.side === 'right' ? 0 : 'auto')};
		width: calc((${props => props.theme.sizes.pageMaxWidth} * 0.5) + ((100% - ${props => props.theme.sizes.pageMaxWidth}) / 2));
		height: 100%;
		padding: 0;
		margin-bottom: 0;
	}
`;

const Content = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	padding: 0 3rem;

	@media(min-width: 768px) {
		padding: 12rem;
		padding-left: ${props => (props.imageSide === 'right' ? 0 : '6rem')};
		padding-right: ${props => (props.imageSide === 'right' ? '12rem' : 0)};
	}
`;

const Text = styled('div')`
	font-size: 1.8rem;
	color: ${props => props.theme.colors.gray};
`;

const ButtonWrapper = styled('div')`
	display: flex;
	margin-top: 3rem;
`;

const ShowcaseSection = ({
	title,
	text,
	image,
	imageSide,
	url
}) => {
	return (
		<StyledShowcaseSection>
			<Image image={image} side={imageSide} />
			<Container>
				<Columns>
					<Column width={breakpoints} order={imageSide === 'right' ? 1 : 2}>
						<Content imageSide={imageSide}>
							<H1 marginBottom="4.5rem">{title}</H1>
							<Text>
								{text}
							</Text>
							<ButtonWrapper>
								<Link to={url}>
									<Button primary="true">Read more</Button>
								</Link>
							</ButtonWrapper>
						</Content>
					</Column>
					<Column width={breakpoints} order={imageSide === 'right' ? 2 : 1}></Column>
				</Columns>
			</Container>
		</StyledShowcaseSection>
	);
};

export default ShowcaseSection;
