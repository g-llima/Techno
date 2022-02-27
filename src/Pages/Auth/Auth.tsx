import React from "react";
import { Link } from "react-router-dom";

import "./CSS/Auth.css";

function Auth() {
  return (
    <div className="auth">
      <div className="auth__content">
        <div className="header">
          <i className="fal fa-lock-alt"></i>
          <h2>Sign Up</h2>
        </div>
        <form action="" className="body">
          <input type="text" placeholder="First Name*" name="firstname" />
          <input type="text" placeholder="Last Name*" name="lastname" />
          <input type="email" placeholder="Email Address*" name="email" />
          <input type="password" placeholder="Password*" name="password" />
          <input
            type="password"
            placeholder="Repeat Password*"
            name="passwordr"
          />
          <button type="submit">SIGN UP</button>
        </form>
        <p>
          Already have an account? <Link to="/">Sign in.</Link>
        </p>
      </div>
    </div>
  );
}

export default Auth;
