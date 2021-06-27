import React from "react";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Login}/>
        <Route exact path="/Reg" component={Reg}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
