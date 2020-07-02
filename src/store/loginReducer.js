import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  login: "",
  showHeader: false,
};
export function authReducer(state = initialState, action) {
  if (action.type === LOGIN) {
    return {
      ...state,
      login: action.payload.login,
    };
  }

  if (action.type === LOGOUT) {
    return {
      ...state,
      login: "",
    };
  }

  return state;
}
