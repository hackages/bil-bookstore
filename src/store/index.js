import { combineReducers, createStore } from "redux";
import { loginReducer } from "./loginReducer";

const state = {
  auth: loginReducer,
};

export const store = createStore(combineReducers(state));
