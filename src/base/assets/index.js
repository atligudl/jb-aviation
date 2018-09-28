import styled from 'react-emotion';

const AssetType = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.colors.grayLight};
	padding: 0.2rem 1.8rem;
	border-radius: 9999px;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 12px;
`;

const SmallUppercase = styled('div')`
	display: flex;
	align-items: center;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	padding: 0 0.8rem;
`;

const StyledAssetSelectionInner = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2.8rem;
	width: 2.8rem;
	background-color: ${props => (props.selected ? props.theme.colors.secondary : '#fff')};
	border: 1px solid ${props => (props.selected ? props.theme.colors.secondary : props.theme.colors.borderColor)};
	border-radius: 100%;
	transition: background-color 350ms ease, border-color 150ms;

	svg {
		color: ${props => (props.selected ? '#fff' : props.theme.colors.textColor)};
		transition: opacity 150ms, transform 350ms cubic-bezier(.78,-1.22,.17,1.89);
		opacity: ${props => (props.selected ? '1' : '0')};
		transform: ${props => (props.selected ? 'scale(1.25)' : 'none')};
	}
`;

const StyledAssetSelection = styled('div')`
	position: absolute;
	top: 0; right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
	padding: 2rem;
	cursor: pointer;

	&:hover {
		${StyledAssetSelectionInner} {
			svg {
				opacity: ${props => (props.selected ? '1' : '0.5')};
			}
		}
	}
`;

const LoadingAssetOverlay = styled('div')`
	position: absolute;
	top: 0; right: 0;
	left: 0; bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255,255,255, 0.5);
`;

export {
	AssetType,
	SmallUppercase,
	StyledAssetSelection,
	StyledAssetSelectionInner,
	LoadingAssetOverlay
};
