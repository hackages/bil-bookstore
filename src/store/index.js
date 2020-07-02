import { combineReducers, createStore } from "redux";
import { authReducer } from "./loginReducer";

const state = {
  auth: authReducer,
};

export const store = createStore(combineReducers(state));
