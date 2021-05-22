import React, {Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {getPublicFallbackRoutes} from "../route/fallbackRoutes";
import RouteLoading from "../route/component/loading/RouteLoading";
import getPublicRouteComponents from "../route/publicRoutes";


function RootApp() {
  return (
    <BrowserRouter basename={"/"}>
      <Route path={"/"} component={AppWithSuspense} />
    </BrowserRouter>
  );
}

function AppWithSuspense() {
  return (
    <React.StrictMode>
      <Suspense fallback={<RouteLoading />}>
        <Switch>
          {[
            ...getPublicRouteComponents(),
            ...getPublicFallbackRoutes()
          ]}
        </Switch>
      </Suspense>
    </React.StrictMode>
  );
}

export default RootApp;
