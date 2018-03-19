import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
