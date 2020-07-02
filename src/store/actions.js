export const LOGIN = "Login";
export const LOGOUT = "Logout";

export const loginAction = (login) => ({
  type: LOGIN,
  payload: {
    login,
  },
});

export const logoutAction = () => ({
  type: LOGOUT,
});
