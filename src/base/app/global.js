import theme from './theme';

const globalTheme = `
	* {
		box-sizing: border-box;
	}

	html {
		font-size: 50%;
		font-family: ${theme.fonts.fontFamily};

		@media(min-width: 767px) {
			font-size: 62.5%;
		}
	}

	html, body, #content, #target {
		height: 100%;
	}

	body {
		padding-top: ${theme.sizes.headerHeight};
		margin: 0;
		font-size: ${theme.fonts.fontSize};
		line-height: 1.6;
		color: ${theme.colors.textColor};
	}

	img {
		max-height: 100%;
		max-width: 100%;
	}

	a {
		text-decoration: none;
	}
`;

export default globalTheme;
