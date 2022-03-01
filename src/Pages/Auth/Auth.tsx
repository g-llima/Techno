import { useState } from "react";
import { useDispatch } from "react-redux";

import "./CSS/Auth.css";
import { authRegister } from "../../Actions/actions.js";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [authData, setAuthData] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    rpass: "",
  });

  const dispatch = useDispatch();

  function clearForm() {
    setAuthData({ fname: "", lname: "", email: "", pass: "", rpass: "" });
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (authData.pass !== authData.rpass) {
      console.log("Senhas diferentes");
    } else {
      dispatch(authRegister(authData));
      clearForm();
    }
  };

  return (
    <div className="auth">
      <div className="auth__content">
        <div className="header">
          <i className="fal fa-lock-alt"></i>
          <h2>Sign {isSignIn ? "In" : "Up"}</h2>
        </div>
        <form onSubmit={handleSubmit} method="post" className="body">
          {!isSignIn && (
            <>
              <input
                type="text"
                placeholder="First Name*"
                name="firstname"
                required
                value={authData.fname}
                onChange={(e) =>
                  setAuthData({ ...authData, fname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name*"
                name="lastname"
                required
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
            required
            value={authData.email}
            onChange={(e) =>
              setAuthData({ ...authData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password*"
            name="password"
            required
            value={authData.pass}
            onChange={(e) => setAuthData({ ...authData, pass: e.target.value })}
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Repeat Password*"
              name="passwordr"
              required
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
