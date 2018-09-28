import styled from 'react-emotion';

const TabWrapper = styled('div')`
	display: flex;
	align-items: center;
`;

const Tab = styled('div')`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 2.5rem;
	color: ${props => (props.active ? props.theme.colors.secondary : props.theme.colors.textColor)};
	border-bottom: 1px solid ${props => (props.active ? props.theme.colors.primary : props.theme.colors.borderColor)};
	cursor: pointer;
	font-weight: 700;
	transition: border-bottom 150ms;

	&:hover {
		border-bottom: 1px solid ${props => (props.active ? props.theme.colors.primaryDark : props.theme.colors.borderDark)};
	}
`;

export { TabWrapper, Tab };
