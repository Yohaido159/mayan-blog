import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";

import jwt from "jsonwebtoken";

import { userToState, formSubmit } from "./user.action";

export function* submitRequest() {
  const data = yield select((state) => state.users.form);
  const res = yield axios.post("http://127.0.0.1:8000/rest/login/", data);

  yield put({ type: "SUCCESS_LOGIN", success: true });
  yield put(formSubmit("", ""));

  if (res) {
    if (res.status === 200) {
      window.localStorage.setItem("token", res.data.token);
    }
  }

  const token = window.localStorage.getItem("token") || null;

  if (token) {
    try {
      const verifyJWT = jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
      yield put(userToState(verifyJWT));
    } catch (e) {
      window.localStorage.removeItem("token");
    }
  }
}

export function* submitStart() {
  yield takeLatest("SUBMIT_START", submitRequest);
}
