import React, { Component } from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { Flex } from '@rebass/grid/emotion';

import { H5, Anchor } from '../base';
import logo from '../logo.svg';

const StyledHeader = styled('header')`
	display: flex;
	align-items: center;
	position: fixed;
	top: 0; left: 0;
	right: 0;
	height: ${props => (props.condensed ? props.theme.sizes.headerHeightCondensed : props.theme.sizes.headerHeight)};
	padding: 1rem 3rem;
	background-color: #fff;
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.21);
	transition: height 250ms ease;
	z-index: 10;
`;

const Logo = styled('div')`
	width: 60px;
`;

const HeaderTitle = styled('div')`
	font-family: ${props => props.theme.fonts.fontFamilyCondensed};
	font-size: 1.8rem;
	text-decoration: none;
	color: ${props => props.theme.colors.textColor};
`;

const Navigation = styled('nav')`
	display: flex;
	align-items: center;
	margin-left: 3rem;
`;

const NavItem = styled('div')`
	padding: 0 2rem;
	font-family: ${props => props.theme.fonts.fontFamilyCondensed};
	font-size: 1.8rem;
`;

class Header extends Component {
	state = {
		condensed: false
	}

	componentDidMount() {
		document.addEventListener('scroll', () => {
			if(!this.state.condensed && window.scrollY > 200) {
				this.setState({ condensed: true });
			} else if(this.state.condensed && window.scrollY < 200) {
				this.setState({ condensed: false });
			}
		});
	}

	render() {
		return (
			<StyledHeader condensed={this.state.condensed}>
				<Link className={Anchor} to="/">
					<Flex alignItems="center">
						<Logo>
							<img src={logo} alt="Page header" />
						</Logo>
						<HeaderTitle>JB Aviation</HeaderTitle>
					</Flex>
				</Link>
				<Navigation>
					<Link className={Anchor} to="/services">
						<NavItem>Services</NavItem>
					</Link>
					<Link className={Anchor} to="/about-us">
						<NavItem>About Us</NavItem>
					</Link>
				</Navigation>
			</StyledHeader>
		);
	}
}

export default Header;
