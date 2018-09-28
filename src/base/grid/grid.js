import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';

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

export { Columns, Column };
