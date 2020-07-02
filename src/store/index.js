import { combineReducers, createStore } from "redux";
import { authReducer } from "./loginReducer";
import { uiReducer } from "./uiReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { booksReducer } from "./booksReducer";

const state = {
  ui: uiReducer,
  auth: authReducer,
  books: booksReducer,
};

export const store = createStore(combineReducers(state), composeWithDevTools());
