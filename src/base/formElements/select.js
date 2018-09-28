import styled from 'react-emotion';

const Select = styled('select')`
	display: flex;
	align-items: center;
	width: 100%;
	height: 4.5rem;
	border-radius: 4px;
	background-color: ${props => props.theme.colors.grayLight};
	padding: 0 1.5rem;
	outline: none;
	margin: 0;
	font-size: 16px;
	border: 1px solid ${props => props.theme.colors.borderColor};
	transition: box-shadow 150ms ease-in;
	font-family: ${props => props.theme.fonts.fontFamily};

	&:focus {
		box-shadow: 0 2px 8px 0 rgba(100,100,100,0.5);
	}
`;

export default Select;
