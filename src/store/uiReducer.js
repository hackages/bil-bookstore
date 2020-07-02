import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  showHeader: false,
  loading: false,
};
export function uiReducer(state = initialState, action) {
  if (action.type === LOGIN) {
    return {
      ...state,
      showHeader: true,
    };
  }

  if (action.type === LOGOUT) {
    return {
      ...state,
      showHeader: false,
    };
  }

  if (action.type === "HTTP_STARTED") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "GETBOOKS_SUCCESS") {
    return {
      ...state,
      loading: false,
    };
  }

  return state;
}
