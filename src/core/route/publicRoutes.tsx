import React from "react";
import {Route} from "react-router-dom";

import ROUTE_NAMES from "./util/routeNames";
import Home from "../../home/Home";

function getPublicRouteComponents() {
  return [
    <Route key={`route:=${ROUTE_NAMES.ROOT}`} exact={true} path={ROUTE_NAMES.ROOT}>
      <Home />
    </Route>
  ];
}

export default getPublicRouteComponents;
