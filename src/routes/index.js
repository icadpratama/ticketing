import React from "react";
import { Route, Switch } from "react-router-dom";

import Company from "./company/index";
import Dashboard from "./dashboard/index";
import Ticket from "./ticket/index";
import Agent from "./agent/index";
import Admin from "./admin/index";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={Dashboard} />
      <Route path={`${match.url}ticket`} component={Ticket} />
      <Route path={`${match.url}company`} component={Company} />
      <Route path={`${match.url}agent`} component={Agent} />
      <Route path={`${match.url}admin`} component={Admin} />
    </Switch>
  </div>
);

export default App;
