import React from 'react';
import Relay from 'react-relay';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  Home,
} from 'containers';

const ViewerQueries = {
  viewer: () => Relay.QL `query { viewer }`
};

/**
 * Please keep routes in alphabetical order
 */
export default (
  <Route path="/" component={App} queries={ViewerQueries}>
    <IndexRoute component={Home} queries={ViewerQueries}/>
  </Route>
);
