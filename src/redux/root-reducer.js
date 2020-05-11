import { combineReducers } from "redux";

import postReducer from "./post/post.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  post_main: postReducer,
  users: userReducer,
});
