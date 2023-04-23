import React from 'react'
import { Link } from "react-router-dom";
import "./Signup.css"; // import styles

function Signup() {
  return (
    <div className="signup-container">
      <h3>Create your account</h3>
      <form>
        <div className="input-container">
        <label>Username</label>
          <input type="email" placeholder="Create your username" />
        </div>
        <div className="input-container">
        <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-container">
        <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="input-container">
        <label>Confirm password</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        <div className="signup-bt">
        <button type="submit">Sign Up</button>
        </div>
      </form>
      <a>Already have an account?{" "}
        <Link to="/login" >
          Sign up
        </Link></a>
    </div>
  )
}

export default Signup
