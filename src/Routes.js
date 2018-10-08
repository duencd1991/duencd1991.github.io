import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../src/helper';
// import Home from "./views/home/Home";
import {Menu} from "./views";

export default () =>
  <Router history={history}>
    <Switch>
      <Route path='/' component={Menu} />
    </Switch>
  </Router>;