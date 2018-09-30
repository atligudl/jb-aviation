import React from 'react';
import styled from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../base/app/theme';
import { H3 } from '../base';

const StyledServiceList = styled('div')`

`;

const IconWrapper = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
	margin: 0 auto 3rem auto;
	border: 1px solid ${props => props.theme.colors.borderDark};
	border-radius: 100%;

	svg {
		color: ${props => props.theme.colors.borderDark};
	}
`;

const HeadingWrapper = styled('div')`
	max-width: 600px;
	margin: 0 auto;
	text-align: center;
`;

const Items = styled('div')`
	display: flex;
	flex-wrap: wrap;
	max-width: 800px;
	margin: 0 auto;
`;

const Item = styled('div')`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 2rem;
	text-align: center;
	font-family: ${props => props.theme.fonts.fontFamilyCondensed};
	font-size: 1.8rem;
	line-height: 1.2;
	border: 1px solid ${props => props.theme.colors.borderColor};

	@media(min-width: 480px) { width: 50%; }
`;

const ServiceList = ({ title, items, icon }) => {
	return (
		<StyledServiceList>
			<div>
				<IconWrapper>
					<FontAwesomeIcon icon={icon} size="2x" />
				</IconWrapper>
			</div>
			<HeadingWrapper>
				<H3 marginBottom="6rem">
					JB Aviation has during the last 20 years physically inspected and audited the
					following aircraft and engine types
				</H3>
			</HeadingWrapper>
			<Items>
				{
					items.map((item) => {
						return (
							<Item>{item}</Item>
						);
					})
				}
			</Items>
		</StyledServiceList>
	);
};

export default ServiceList;
