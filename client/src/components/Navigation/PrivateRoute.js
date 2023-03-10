import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import history from './history';
import NFL from "../NFL";
import NBA from "../NBA";
import epl from "../epl";
import Profile from "../Profile";
export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    <Router history={history}>
      <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/NFL" exact component={NFL} />
        <Route path="/NBA" exact component={NBA} />
        <Route path="/EPL" exact component={epl} />
        <Route path="/profile"exact component={Profile}/>


      </Switch>
    </Router>
  );
}