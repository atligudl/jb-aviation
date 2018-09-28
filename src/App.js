import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header/header';
import Frontpage from './frontpage/frontpage';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/" component={Frontpage} />
			</div>
		);
	}
}

export default App;
