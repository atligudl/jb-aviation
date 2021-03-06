import React, { Component } from 'react';
import styled from 'react-emotion';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './header/header';
import Frontpage from './frontpage/frontpage';
import Services from './services/services';
import AboutUs from './aboutUs/aboutUs';
import Footer from './footer/footer';

const Wrapper = styled('div')`
	.fade-enter {
		opacity: 0.01;
	}

	.fade-enter.fade-enter-active {
		opacity: 1;
		transition: opacity 300ms ease-in;
		transition-delay: 100ms;
	}

	.fade-exit {
		opacity: 1;
	}

	.fade-exit.fade-exit-active {
		opacity: 0.01;
		transition: opacity 1000ms ease-in;
	}

	div.transition-group {
		position: relative;
	}
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Wrapper>
					<TransitionGroup className="transition-group">
						<CSSTransition
							key={this.props.location.key}
							timeout={{ enter: 300, exit: 300 }}
							classNames="fade">
							<section className="route-section">
								<Switch location={this.props.location}>
									<Route exact path="/" component={Frontpage} />
									<Route exact path="/services" component={Services} />
									<Route exact path="/about-us" component={AboutUs} />
								</Switch>
							</section>
						</CSSTransition>
					</TransitionGroup>
				</Wrapper>
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
