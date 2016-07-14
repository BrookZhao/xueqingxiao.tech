import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App } from 'modules/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute path="/" component={App} />
  </Route>
);
