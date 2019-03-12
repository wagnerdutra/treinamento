import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Map from '../pages/Map';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Map} />
    </Switch>
  </Router>
);

export default Routes;
