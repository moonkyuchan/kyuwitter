import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { ImSleepy } from "react-icons/im";
// import "./App.scss";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
    console.log(user.displayName);
  };

  return (
    <div className="app_container">
      {init && (
        <div style={{ display: "flex" }}>
          <div className="title">Kyuwitter</div>
          <ImSleepy size="20px" style={{ marginLeft: "10px" }} />
        </div>
      )}
      {init ? (
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        <span className="initial">Initializing...</span>
      )}
      {/* <footer>&copy; {new Date().getFullYear()} KYUWITTER</footer> */}
    </div>
  );
}

export default App;
