import { keyframes } from 'react-emotion';

const fadeIn = keyframes`
	0% { opacity: 0; }
	25% { opacity: 0.25; }
	50% { opacity: 0.5; }
	75% { opacity: 0.75; }
	100% { opacity: 1; }
`;

const fadeOut = keyframes`
	0% { opacity: 1; }
	25% { opacity: 0.75; }
	50% { opacity: 0.5; }
	75% { opacity: 0.25; }
	100% { opacity: 0; }
`;

const modalOpen = keyframes`
	0% { opacity: 0; transform: scale3d(1.1, 1.1, 1); }
	100% { opacity: 1; transform: scale3d(1, 1, 1); }
`;

const modalClose = keyframes`
	0% { opacity: 1; }
	100% { opacity: 0; transform: scale3d(0.9, 0.9, 1); }
`;

const contextMenuSlideDown = keyframes`
	0% { max-height: 0; }
	100% { max-height: 500px; }
`;

const pulsateQuarterOpacity = keyframes`
	0% { opacity: 0.25; }
	50% { opacity: 0.05; }
	100% { opacity: 0.25; }
`;

const rotate = keyframes`
	0% { transform: rotate(0); }
	100% { transform: rotate(360deg); }
`;

const slideRight90 = keyframes`
	0% { transform: translate3d(-100%, 0, 0); }
	100% { transform: translate3d(-10%, 0, 0); }
`;

const slideDown = keyframes`
	0% { transform: translate3d(0, -100%, 0); }
	100% { transform: translate3d(0, 0, 0); }
`;

export {
	fadeIn,
	fadeOut,
	modalOpen,
	modalClose,
	contextMenuSlideDown,
	pulsateQuarterOpacity,
	rotate,
	slideRight90,
	slideDown
};
