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

    case "SUBMIT_START":
      return {
        ...state,
      };

    case "SUBMIT_INPUT":
      return {
        ...state,
        form: action.form,
      };

    case "SUCCESS_LOGIN":
      return {
        ...state,
        success: action.success,
      };

    default:
      return state;
  }
};

export default userReducer;
