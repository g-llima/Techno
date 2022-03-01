import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CSS/Auth.css";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [authData, setAuthData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    rpass: "",
  });

  function clearForm() {
    setAuthData({ fname: "", lname: "", email: "", pass: "", rpass: "" });
  }

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
              <input
                type="text"
                placeholder="First Name*"
                name="firstname"
                value={authData.fname}
                onChange={(e) =>
                  setAuthData({ ...authData, fname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name*"
                name="lastname"
                value={authData.lname}
                onChange={(e) =>
                  setAuthData({ ...authData, lname: e.target.value })
                }
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email Address*"
            name="email"
            value={authData.email}
            onChange={(e) =>
              setAuthData({ ...authData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password*"
            name="password"
            value={authData.pass}
            onChange={(e) => setAuthData({ ...authData, pass: e.target.value })}
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Repeat Password*"
              name="passwordr"
              value={authData.rpass}
              onChange={(e) =>
                setAuthData({ ...authData, rpass: e.target.value })
              }
            />
          )}
          <button type="submit">SIGN {isSignIn ? "IN" : "UP"}</button>
        </form>
        <p>
          {isSignIn ? "Don't" : "Already"} have an account?{" "}
          <span
            onClick={() => {
              setIsSignIn(!isSignIn);
              clearForm();
            }}
          >
            Sign {isSignIn ? "Up." : "In."}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
