import React from 'react';
import styled from 'react-emotion';
import { Container, Anchor } from '../base';
import { Link } from 'react-router-dom';
import { Flex } from '@rebass/grid/emotion';

import logo from '../logo.svg';

const StyledFooter = styled('footer')`
	padding: 3rem 0;
	margin-top: 3rem;
	border-top: 1px solid ${props => props.theme.colors.borderColor};
`;

const Logo = styled('div')`
	width: 60px;
`;

const FooterTitle = styled('div')`
	font-family: ${props => props.theme.fonts.fontFamilyCondensed};
	font-size: 1.8rem;
	text-decoration: none;
	color: ${props => props.theme.colors.textColor};
	margin-right: 3rem;
`;

const FooterItem = styled('div')`
	padding: 1.5rem;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Flex alignItems="center" justifyContent="space-between">
					<Link to="/">
						<Flex alignItems="center">
							<Logo>
								<img src={logo} alt="Page logo" />
							</Logo>
							<FooterTitle>JB Aviation</FooterTitle>
						</Flex>
					</Link>
					<Flex alignItems="center">
						<FooterItem>Reykjavik, Iceland</FooterItem>
						<a href="mailto:someone@email.com" className={Anchor}>
							<FooterItem>email@email.com</FooterItem>
						</a>
					</Flex>
				</Flex>
			</Container>
		</StyledFooter>
	);
}

export default Footer;
