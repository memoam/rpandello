import React from "react";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Open from "../pages/Open";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Login}/>
        <Route exact path="/Reg" component={Reg}/>
        <Route exact path="/Open" component={Open}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
