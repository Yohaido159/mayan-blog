export const userToState = (user) => ({
  type: "LOGIN_USER",
  user: user,
});

export const submitStart = (username, password) => ({
  type: "SUBMIT_START",
});

export const formSubmit = (username, password) => ({
  type: "SUBMIT_INPUT",
  form: {
    username,
    password,
  },
});
