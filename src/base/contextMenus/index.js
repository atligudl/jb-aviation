import { css } from 'emotion';
import styled from 'react-emotion';
import theme from '../../app/theme';

const MenuLine = css`
	display: flex;
	align-items: center;
	padding: 1.5rem;
	cursor: pointer;
	transition: background-color 100ms;

	&:hover {
		background-color: ${theme.colors.grayLight};
	}
`;

const MenuLineIconWrapper = styled('div')`
	margin-right: 1.5rem;
`;

const InviteLine = css`
	border-bottom: 1px solid ${theme.colors.borderColor};
`;

const DeleteLine = css`
	color: ${theme.colors.primary};
	border-top: 1px solid ${theme.colors.borderColor};
`;

export { MenuLine, MenuLineIconWrapper, InviteLine, DeleteLine };
