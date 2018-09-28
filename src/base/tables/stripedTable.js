import styled from 'react-emotion';

const StripedTable = styled('div')`

`;

const StripedTableItem = styled('div')`
	border-bottom: 1px solid ${props => props.theme.colors.borderColor};

	&:nth-child(even) {
		background-color: ${props => props.theme.colors.grayLight};
	}
`;

export { StripedTable, StripedTableItem };
