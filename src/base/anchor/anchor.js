import { css } from 'emotion';

import theme from '../app/theme';

const Anchor = css`
	cursor: pointer;
	color: ${theme.colors.primary};
	text-decoration: none;

	&:hover {
		text-decoration: none;
		color: ${theme.colors.primaryDark};
	}
`;

export default Anchor;
