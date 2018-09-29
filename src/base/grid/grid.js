import React from 'react';
import styled from 'react-emotion';
import { Flex, Box } from '@rebass/grid/emotion';

const Container = styled('div')`
	max-width: 90%;
	margin: 0 auto;

	@media(min-width: ${props => props.theme.sizes.containerBreakpoint}) {
		max-width: ${props => props.theme.sizes.pageMaxWidth};
	}
`;

const Columns = (props) => {
	const { children } = props;

	return (
		<Flex mx="-1.5rem" {...props} flexWrap="wrap">
			{children}
		</Flex>
	);
};

const Column = (props) => {
	const { children } = props;

	return (
		<Box px="1.5rem" mb="1.5rem" {...props}>
			{children}
		</Box>
	);
};

export { Container, Columns, Column };
