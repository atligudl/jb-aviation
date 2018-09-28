import React from 'react';
import styled from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const StyledCheckboxInner = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1.6rem;
	width: 1.6rem;
	background-color: ${props => (props.selected ? props.theme.colors.secondary : '#fff')};
	border: 1px solid ${props => (props.selected ? props.theme.colors.secondary : props.theme.colors.borderColor)};
	transition: background-color 350ms ease, border-color 150ms;

	svg {
		color: ${props => (props.selected ? '#fff' : props.theme.colors.textColor)};
		transition: opacity 150ms, transform 350ms cubic-bezier(.78,-1.22,.17,1.89);
		opacity: ${props => (props.selected ? '1' : '0')};
		transform: ${props => (props.selected ? 'scale(1.05)' : 'none')};
	}
`;

const StyledCheckbox = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		${StyledCheckboxInner} {
			svg {
				opacity: ${props => (props.selected ? '1' : '0.5')};
			}
		}
	}
`;

const CheckBox = (props) => {
	const { selected } = props;

	return (
		<StyledCheckbox {...props}>
			<StyledCheckboxInner selected={selected}>
				<FontAwesomeIcon icon={faCheck} size="xs" />
			</StyledCheckboxInner>
		</StyledCheckbox>
	);
};

export default CheckBox;
