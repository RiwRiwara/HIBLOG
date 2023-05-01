import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {  useNavigate} from "react-router-dom";

export default function FromComponent() {
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
  });
  const { title, content, author } = state;
  const navigate = useNavigate();

  //Define value in state
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/create`, { title, content, author })
      .then((response) => {
        Swal.fire("Notification", "Create Complete!", "success");
        setState({ ...state, title: "", content: "", author: "" });
        goBackPage()
      })
      .catch((err) => {
        Swal.fire("Notification", err.response.data.error, "error");
      });
  };
  const goBackPage = () => navigate('/blogs');

  return (
    <div>
    <div className="container p-5">
    <nav class="breadcrumb">
        <a class="breadcrumb-item" href="/blogs">Main</a>
        <span class="breadcrumb-item active" aria-current="page">Active</span>
      </nav>
      <h1>Write Blog</h1>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label for="" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Blog Title"
            value={title}
            onChange={inputValue("title")}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id=""
            rows="3"
            placeholder="My story . . ."
            value={content}
            onChange={inputValue("content")}
          ></textarea>
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Admin"
            value={author}
            onChange={inputValue("author")}
          />
        </div>
        <div className="login-bt mb-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

      </form>
    </div>
    </div>
  );
}
