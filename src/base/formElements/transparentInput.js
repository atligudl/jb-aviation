import styled from 'react-emotion';

const TransparentInput = styled('input')`
	display: flex;
	align-items: center;
	width: 100%;
	height: 3.5rem;
	background-color: #fff;
	padding: 0;
	outline: none;
	margin: 0;
	font-size: 14px;
	border: none;
	border-bottom: 1px solid ${props => props.theme.colors.borderColor};
	transition: border-color 150ms ease-in;
	font-family: ${props => props.theme.fonts.fontFamily};

	&:focus {
		border-color: ${props => props.theme.colors.borderDark};
	}
`;

export default TransparentInput;
