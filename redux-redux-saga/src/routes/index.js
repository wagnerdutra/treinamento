import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../pages/main";

import Footer from "../components/Footer";

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);

export default Routes;
