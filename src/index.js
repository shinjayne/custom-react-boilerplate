import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Root from './client/Root.js';


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();