import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

import { H2 } from '../base';
import logo from '../logo.svg';

const StyledHeader = styled('header')`
	display: flex;
	align-items: center;
	position: fixed;
	top: 0; left: 0;
	right: 0;
	height: 7.7rem;
	padding: 1rem 3rem;
	background-color: #fff;
	border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`;

const Logo = styled('div')`
	width: 60px;
`;

const Header = () => {
	return (
		<StyledHeader>
			<Logo>
				<Link to="/">
					<img src={logo} alt="Page header" />
				</Link>
			</Logo>
			<H2>JB Aviation</H2>
		</StyledHeader>
	);
};

export default Header;
