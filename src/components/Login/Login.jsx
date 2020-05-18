import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { submitStart, formSubmit } from "../../redux/user/user.action";

import "./Login.styles.scss";

const Login = ({ open, toggle }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const data = useSelector((state) => state.users);
  console.log(data);

  const setUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const setPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    dispatch(formSubmit(username, password));
    dispatch(submitStart());
    e.preventDefault();
  };

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
        {data ? (
          <>
            {data.success === true && (
              <div className="alert alert-success">you are loggin in! welcome: {data.currentUser.username}</div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
