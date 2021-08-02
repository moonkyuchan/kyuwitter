import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <HashRouter>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route>
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route>
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;
