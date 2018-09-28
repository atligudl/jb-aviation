import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledRoundHoverableIcon = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 42px;
	width: 42px;
	color: ${props => props.theme.colors.textColor};
	background-color: transparent;
	border-radius: 100%;
	cursor: pointer;
	transition: background-color 150ms ease;

	&:hover {
		background-color: ${props => (props.hoverBackgroundColor ? props.hoverBackgroundColor : '#fff')};
	}
`;

const RoundHoverableIcon = (props) => {
	const { children } = props;

	return (
		<StyledRoundHoverableIcon {...props}>
			{children}
		</StyledRoundHoverableIcon>
	);
};

RoundHoverableIcon.propTypes = {
	children: PropTypes.any
};

RoundHoverableIcon.defaultProps = {
	children: null
};

export default RoundHoverableIcon;
