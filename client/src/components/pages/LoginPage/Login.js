import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // import styles
import axios from "axios";
import Swal from "sweetalert2";
import { authenticate, getUser } from "../../../services/authorize";
import Navbar from "../../base/navbar/navbar";

const Login = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: ""
  });
  const { username, password } = state

  const inputValue = name => event => {
    setState({ ...state, [name]: event.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/login`, { username, password })
      .then((response) => {
        authenticate(response)
        Swal.fire("Welcome", "Login Complete!", "success");
        goBlogs()
      })
      .catch((err) => {
        Swal.fire("Failed", "Failed to logining!", "error");
      });
    const goBlogs = () => navigate('/blogs');
  };
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h1>Admin panel</h1>
        <p>[Admin, admin123]</p>
        <form onSubmit={submitForm}>
          <div className="input-container">
            <label>Username</label>
            <input
              type="test"
              placeholder="Enter your username"
              onChange={inputValue("username")}
              value={username}
            />

          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={inputValue("password")}
            />

          </div>
          <div className="login-bt mb-2">
            <button type="submit">Login Admin</button>
          </div>
        </form>
        <a>Don't have an account?{" "}
          <Link to="/signup" >
            Sign up
          </Link>
        </a>
      </div>
    </div>

  );
};

export default Login;
