import styled from 'react-emotion';

export const Ul = styled('ul')`
	list-style: none;
	padding-inline-start: 2.5rem;
	font-size: 1.8rem;
	font-family: ${props => props.theme.fonts.fontFamily};
	color: #888;
`;

export const Li = styled('li')`
	position: relative;
	margin-bottom:  5rem;

	&:before {
		content: '';
		position: absolute;
		left: -2.5rem; top: 1rem;
		height: 6px; width: 6px;
		border-radius: 100%;
		background-color: ${props => props.theme.colors.primary};
	}
`;
