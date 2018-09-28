import React from 'react';
import styled from 'react-emotion';

const StyledInner = styled('div')`
	padding-top: ${props => props.paddingTop};
`;

const Inner = (props) => {
	const { children } = props;

	return (
		<StyledInner {...props}>
			{children}
		</StyledInner>
	);
};

export default Inner;
