import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterMap from './router/Router'; 
import registerServiceWorker from './registerServiceWorker';
const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();
