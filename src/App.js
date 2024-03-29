import React from "react";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import Main from './views/Main'

export default function ParamsExample() {
  return (
    <HashRouter>
        <Switch>
          <Route path="/:countryCode" component={Main} />
          <Route path="/" component={Main} />
        </Switch>
    </HashRouter>
  );
}
