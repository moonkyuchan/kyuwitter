import React from "react";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const onSocialClick = async (event) => {
    let provider;
    provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <AuthForm />
      <button onClick={onSocialClick} name="google" className="authBtn">
        <div className="authGoogleWrap">
          <FcGoogle className="googleIcon" size="20" />
          Continue with Google
        </div>
      </button>
    </div>
  );
};

export default Auth;
