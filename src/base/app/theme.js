import { darken } from 'polished';

const theme = {
	fonts: {
		fontFamily: 'Roboto, sans-serif',
		fontFamilyCondensed: 'Roboto Condensed, Roboto, sans-serif',
		fontSize: '1.4rem'
	},
	spacing: '3rem',
	colors: {
		primary: '#107dbe',
		primaryDark: darken(0.1, '#107dbe'),
		primaryDarker: darken(0.2, '#107dbe'),
		secondary: '#1068D1',
		secondaryDark: darken(0.05, '#1068D1'),
		grayLight: '#eef2f8',
		gray: '#99a8c3',
		grayDark: '#768196',
		green: '#69e6a5',
		greenDark: darken(0.05, '#69e6a5'),
		blueHighlighted: 'rgba(83, 157, 243, 0.8)',
		textColor: '#444',
		borderColor: '#edeff4',
		borderDark: '#cecece',
		borderSelected: '#3486ff',
	},
	sizes: {
		sidebarWidth: 64,
		headerHeightCondensed: '6rem',
		headerHeight: '7rem'
	}
};

export default theme;
