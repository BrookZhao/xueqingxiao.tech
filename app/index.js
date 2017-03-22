import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory, applyRouterMiddleware, Router } from 'react-router';
import useRelay from 'react-router-relay';
import routes from './routes';
import 'normalize.css/normalize.css';

injectTapEventPlugin();

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}
    >
  </Router>,
  document.getElementById('container')
);