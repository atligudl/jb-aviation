import styled from 'react-emotion';

const H1 = styled('h1')`
	font-weight: 600;
	font-size: 4rem;
	line-height: 1.2;
	font-family: ${props => props.theme.fonts.fontFamilyCondensed};
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H2 = styled('h2')`
	font-weight: 600;
	font-size: 3.5rem;
	line-height: 1.2;
	font-family: ${props => props.theme.fonts.fontFamilyCondensed};
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H3 = styled('h3')`
	font-weight: 600;
	font-size: 3rem;
	line-height: 1.2;
	font-family: ${props => props.theme.fonts.fontFamilyCondensed};
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H4 = styled('h4')`
	font-weight: 600;
	font-size: 2.5rem;
	line-height: 1.6;
	margin: 0;
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
	color: ${props => props.theme.colors.textColor};
`;

const H5 = styled('h5')`
	font-weight: 600;
	font-size: 1.5rem;
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
