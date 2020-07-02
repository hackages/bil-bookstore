export const LOGIN = "Login";

export const loginAction = (login) => ({
  type: LOGIN,
  payload: {
    login,
  },
});
