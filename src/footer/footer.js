import React from 'react';
import styled from 'react-emotion';
import { Container, Anchor } from '../base';
import { Link } from 'react-router-dom';
import { Flex } from '@rebass/grid/emotion';

import logo from '../assets/images/image1.png';

const StyledFooter = styled('footer')`
	padding: 3rem 0;
	margin-top: 3rem;
	border-top: 1px solid ${props => props.theme.colors.borderColor};
`;

const Logo = styled('div')`
	width: 60px;
`;

const FooterItem = styled('div')`
	padding: 1.5rem;
`;

const FooterItems = styled(Flex)`
	@media(max-width: 1000px) {
		flex-direction: column;
	};
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<FooterItems alignItems="center" justifyContent="space-between">
					<Link to="/">
						<Flex alignItems="center">
							<Logo>
								<img src={logo} alt="Page logo" />
							</Logo>
						</Flex>
					</Link>
					<FooterItems alignItems="center">
						<FooterItem>
							<span style={{ marginRight: '5px' }}>Mobile:</span>
							<a className={Anchor} href="tel:003546960886">
								354 6960886
							</a>
							<span style={{ margin: '0 5px' }}>,</span>
							<a className={Anchor} href="tel:003546166199 ">
								354 6166199
							</a>
						</FooterItem>
						<FooterItem>Reykjavik, Iceland</FooterItem>
						<a href="mailto:jaaviation@jaaviation.com" className={Anchor}>
							<FooterItem>jaaviation@jaaviation.com</FooterItem>
						</a>
					</FooterItems>
				</FooterItems>
			</Container>
		</StyledFooter>
	);
}

export default Footer;
