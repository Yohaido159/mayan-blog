import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { userToState } from "../../redux/user/user.action";

import jwt from "jsonwebtoken";
import axios from "axios";

import "./Login.styles.scss";

const Login = ({ open, toggle }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [res, setRes] = useState(null);

  const setUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const setPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    const res = await axios.post("http://127.0.0.1:8000/rest/login/", data);
    setRes(res);
  };

  useEffect(() => {
    if (res) {
      if (res.status === 200) {
        window.localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
      }
    }

    const token = window.localStorage.getItem("token") || null;

    if (token) {
      try {
        const verifyJWT = jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
        dispatch(userToState(verifyJWT));
      } catch (e) {
        window.localStorage.removeItem("token");
      }
    }
  }, [res]);

  return (
    <div className="login d-flex justify-content-center align-items-center ">
      <div className="card d-flex  ">
        <div className="card-header">
          <h1 className="card-title">Login</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={setUsernameChange} id="username" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={setPasswordChange} id="password" type="password" className="form-control" />
            </div>
            <div className="form-group">
              <button className="btn btn-block btn-primary">Sign In</button>
            </div>
          </form>
        </div>
        <div className="card-footer mt-auto">
          <button onClick={toggle} className="btn btn-primary btn-lg">
            Close
          </button>
        </div>
        {res ? (
          <>
            {res.status === 200 && (
              <div className="alert alert-success">you are loggin in! welcome: {res.data.user.username}</div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
