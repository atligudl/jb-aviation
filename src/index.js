import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import theme from './base/app/theme';
import globalTheme from './base/app/global';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

injectGlobal(globalTheme);

ReactDOM.render((
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
