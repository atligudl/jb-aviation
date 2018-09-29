import React from 'react';
import styled from 'react-emotion';
import { cx, css } from 'emotion';
import theme from '../app/theme';
import Spinner from '../loaders/spinner';

const Default = css`
	display: flex;
	flex: auto 0 0;
	height: 4.6rem;
	padding: 0 2rem;
	align-items: center;
	font-size: 1.6rem;
	font-family: ${theme.fonts.fontFamilyCondensed};
	outline: none;
	border: 1px solid ${theme.colors.borderColor};
	border-radius: 2px;
	background-color: #fff;
	cursor: pointer;
	transition-property: color, background, border, border-color, transform, opacity;
	transition-duration: 100ms;

	&:hover {
		border-color: ${theme.colors.borderDark};
	}

	&:focus {
		border-color: ${theme.colors.borderDark};
		box-shadow: 0 0 14px 0 rgba(200,200,200,0.5);
	}

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	svg {
		color: ${theme.colors.gray};

		&:first-child {
			margin-right: 1.5rem;
		}

		&:last-child {
			margin-left: 1.5rem;
		}
	}
`;

const Primary = css`
	background-color: ${theme.colors.primary};
	color: #fff;

	svg {
		color: #fff;
	}

	&:hover, &:focus {
		background-color: ${theme.colors.primaryDark};
	}
`;

const Secondary = css`
	background-color: ${theme.colors.secondary};
	color: #fff;

	svg {
		color: #fff;
	}

	&:hover, &:focus {
		background-color: ${theme.colors.secondaryDark};
	}
`;

const ColorSecondary = css`
	color: ${theme.colors.secondary};
`;

const Bold = css`
	font-weight: 700;
`;

const Loading = css`
	opacity: 0.5;
	pointer-events: none;
`;

const ButtonCount = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	font-weight: 700;
	border-radius: 100%;
	background-color: ${theme.colors.primaryDarker};
	color: #fff;
	margin-left: 4rem;
`;

const Button = (props) => {
	const { children, count, loading } = props;

	return (
		<button
			{...props}
			className={cx(
				{ [Default]: true },
				{ [Primary]: props.primary === 'true' },
				{ [Secondary]: props.secondary === 'true' },
				{ [Bold]: props.bold === 'true' },
				{ [ColorSecondary]: props.color === 'secondary' },
				{ [Loading]: props.loading === 'true' }
		)}>
			{children}
			{
				count !== undefined && Number(count) > 0 && (
					<ButtonCount>{count}</ButtonCount>
				)
			}
			{
				loading === 'true' && (<Spinner size="lg" />)
			}
		</button>
	);
};

export default Button;
