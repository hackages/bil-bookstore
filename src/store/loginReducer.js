import { LOGIN } from "./actions";

const initialState = {
  login: "",
};
export function loginReducer(state = initialState, action) {
  if (action.type === LOGIN) {
    return {
      ...state,
      login: action.payload.login,
    };
  }

  return state;
}
