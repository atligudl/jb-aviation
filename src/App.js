import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header/header';
import Frontpage from './frontpage/frontpage';
import Services from './services/services';
import AboutUs from './aboutUs/aboutUs';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/" component={Frontpage} />
				<Route exact path="/services" component={Services} />
				<Route exact path="/about-us" component={AboutUs} />
			</div>
		);
	}
}

export default App;
