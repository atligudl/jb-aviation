import styled from 'react-emotion';

const H1 = styled('h1')`
	font-weight: 600;
	font-size: 2rem;
	line-height: 1.6;
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H2 = styled('h2')`
	font-weight: 600;
	font-size: 1.8rem;
	line-height: 1.6;
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H3 = styled('h3')`
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 1.6;
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H4 = styled('h4')`
	font-weight: 600;
	font-size: 1.4rem;
	line-height: 1.6;
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H5 = styled('h5')`
	font-weight: 600;
	font-size: 1.2rem;
	line-height: 1.6;
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H6 = styled('h6')`
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.6;
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

export { H1, H2, H3, H4, H5, H6 };
