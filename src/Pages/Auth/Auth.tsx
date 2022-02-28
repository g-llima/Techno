import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CSS/Auth.css";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="auth">
      <div className="auth__content">
        <div className="header">
          <i className="fal fa-lock-alt"></i>
          <h2>Sign {isSignIn ? "In" : "Up"}</h2>
        </div>
        <form action="" className="body">
          {!isSignIn && (
            <>
              <input type="text" placeholder="First Name*" name="firstname" />
              <input type="text" placeholder="Last Name*" name="lastname" />
            </>
          )}
          <input type="email" placeholder="Email Address*" name="email" />
          <input type="password" placeholder="Password*" name="password" />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Repeat Password*"
              name="passwordr"
            />
          )}
          <button type="submit">SIGN {isSignIn ? "IN" : "UP"}</button>
        </form>
        <p>
          {isSignIn ? "Don't" : "Already"} have an account?{" "}
          <span onClick={() => setIsSignIn(!isSignIn)}>
            Sign {isSignIn ? "Up." : "In."}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
