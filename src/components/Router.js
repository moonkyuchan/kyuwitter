import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <HashRouter>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route>
              <Home exact path="/" />
            </Route>
          </>
        ) : (
          <>
            <Route>
              <Auth exact path="/" />
            </Route>
          </>
        )}
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;
