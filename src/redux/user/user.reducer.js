const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.user,
      };

    default:
      return state;
  }
};

export default userReducer;
