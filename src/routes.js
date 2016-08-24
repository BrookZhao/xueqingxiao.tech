import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Home } from 'modules/Home';

export default (
  <Route path="/" component={Home}>
    <IndexRoute path="/" component={Home} />
  </Route>
);
