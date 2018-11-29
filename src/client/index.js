import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// import Routes from './routes/routes';
import App from './components/app/app';

const history = createBrowserHistory();

const Index = () => (
  <Router history={history}>
    <App />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('react-app'));
