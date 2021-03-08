import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import PostDetails from "./pages/PostDetails";

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
