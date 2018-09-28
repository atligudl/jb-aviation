import styled from 'react-emotion';

const StrippedButton = styled('button')`
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;
	background: transparent;
	outline: none;
	font-weight: 700;
	cursor: pointer;
	padding: ${props => (props.padding ? props.padding : '0')};
`;

export default StrippedButton;
