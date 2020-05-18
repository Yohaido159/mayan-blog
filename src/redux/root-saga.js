import { all, call } from "redux-saga/effects";

import { fetchPostsStart } from "./post/post.saga";
import { submitStart } from "./user/user.saga";

export default function* rootSaga() {
  yield all([call(fetchPostsStart), call(submitStart)]);
}
