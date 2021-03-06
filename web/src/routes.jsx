import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import PostDetails from "./components/PostDetails";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/details/:id" component={PostDetails} />
      </Switch>
    </Router>
  );
}
