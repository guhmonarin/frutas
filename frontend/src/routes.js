import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Frutaslist from "./componentes/Frutas";
import Fruta from "./componentes/Fruta";
import CreateFruta from "./componentes/CreateFruta";
import EditFruta from "./componentes/EditFruta";
import DeleteFruta from "./componentes/DeleteFruta";

const Routes = () => (
    <Router>
    <Switch>
      <Route exact path="/">
        <Frutaslist />
      </Route>
      <Route path="/Fruta/:id">
        <Fruta />
      </Route>
      <Route path="/CreateFruta">
        <CreateFruta />
      </Route>
      <Route path="/EditFruta/:id">
        <EditFruta />
      </Route>
      <Route path="/DeleteFruta/:id">
        <DeleteFruta />
      </Route>
    </Switch>
  </Router>
);

export default Routes;