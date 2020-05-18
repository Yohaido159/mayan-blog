import { takeLatest, call, put } from "redux-saga/effects";

import { postsToStateSuccess } from "./post.actions";

import axios from "axios";

export function* fetchPostAsync() {
  const data = yield call(axios.get, "http://127.0.0.1:8000/api/post/");
  yield put(postsToStateSuccess(data.data));
}

export function* fetchPostsStart() {
  yield takeLatest("FETCH_POSTS_START", fetchPostAsync);
}
