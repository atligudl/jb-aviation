import styled from 'react-emotion';

const Anchor = styled('a')`
	cursor: pointer;
	color: ${props => (props.theme.colors.primary)};
	&:hover {
		text-decoration: none;
		color: ${props => (props.theme.colors.primaryDark)};
	}
`;

export default Anchor;
