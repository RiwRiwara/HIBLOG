import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // import styles

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome back</h1>
      <form>
        <div className="input-container">
        <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-container">
        <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="login-bt mb-2">
        <button type="submit">Login</button>
        </div>
      </form>
      <a>Don't have an account?{" "}
        <Link to="/signup" >
          Sign up
        </Link></a>
    </div>
  );
};

export default Login;
