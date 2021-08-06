import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <HashRouter>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
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
