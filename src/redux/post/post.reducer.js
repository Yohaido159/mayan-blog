const INITIAL_STATE = {
  posts: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POSTS_START":
      return {
        ...state,
      };

    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.posts,
      };

    default:
      return state;
  }
};

export default postReducer;
