import styled from 'react-emotion';

const LoadingBar = styled('div')`
	height: 3px;
	background-color: ${props => props.theme.colors.primary};
	box-shadow: 0 0 24px 0 rgba(0,0,0,0.1);
`;

export default LoadingBar;
