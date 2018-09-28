import styled from 'react-emotion';

const ScrollableContainer = styled('div')`
	height: ${props => (props.height ? props.height : '100%')};
	overflow-y: auto;

	&::-webkit-scrollbar {
		display: block;
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(0,0,0,.05);
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(0,0,0,.15);
		border-radius: 100px;
	}
`;

export default ScrollableContainer;
