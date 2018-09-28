import styled from 'react-emotion';

const Textarea = styled('textarea')`
	display: block;
	width: 100%;
	height: 13.5rem;
	border-radius: 4px;
	background-color: ${props => props.theme.colors.grayLight};
	padding: 2rem 3rem;
	outline: none;
	margin: 0;
	font-size: 16px;
	line-height: 1.6;
	border: 1px solid ${props => props.theme.colors.borderColor};
	transition: box-shadow 150ms ease-in;
	font-family: ${props => props.theme.fonts.fontFamily};

	&:focus {
		box-shadow: 0 2px 8px 0 rgba(100,100,100,0.5);
	}
`;

export default Textarea;
