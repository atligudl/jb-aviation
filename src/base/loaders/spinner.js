import React from 'react';
import styled from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { rotate } from '../keyframes';

const StyledSpinner = styled('div')`
	color: ${props => (props.color ? props.color : props.theme.colors.grayLight)};
	animation: ${rotate} 1s infinite linear;
`;

const Spinner = ({ size, color }) => {
	return (
		<StyledSpinner color={color}>
			<FontAwesomeIcon icon={faSpinner} size={size || '2x'} />
		</StyledSpinner>
	);
};

export default Spinner;
