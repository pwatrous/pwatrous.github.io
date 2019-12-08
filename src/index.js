import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
    <MuiThemeProvider>
        <LandingPage />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
