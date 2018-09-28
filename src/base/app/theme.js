import { darken } from 'polished';

const theme = {
	fonts: {
		fontFamily: 'sans-serif',
		fontSize: '1.4rem'
	},
	spacing: '3rem',
	colors: {
		primary: '#FB1752',
		primaryDark: darken(0.1, '#FB1752'),
		primaryDarker: '#A72648',
		secondary: '#1068D1',
		secondaryDark: darken(0.05, '#1068D1'),
		grayLight: '#eef2f8',
		gray: '#99a8c3',
		grayDark: '#768196',
		green: '#69e6a5',
		greenDark: darken(0.05, '#69e6a5'),
		blueHighlighted: 'rgba(83, 157, 243, 0.8)',
		textColor: '#455571',
		borderColor: '#edeff4',
		borderDark: '#cecece',
		borderSelected: '#3486ff',
	},
	sizes: {
		sidebarWidth: 64
	}
};

export default theme;
