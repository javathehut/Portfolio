import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory}>    
        <Route path="/" component={App} >
            <IndexRoute component={Portfolio} />
            <Route path="about" component={About} />
        </Route>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
