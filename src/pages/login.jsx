import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/actions";
import { useHistory } from "react-router-dom";

export function LoginScreen() {
  const initaltate = {
    disabled: true,
    login: "davyengone",
    password: "dmafdkld",
  };

  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState(initaltate);

  const save = (event) => {
    event.preventDefault();
    dispatch(loginAction(state.login));
    history.push("dashboard");
  };

  const reset = (event) => {
    event.preventDefault();
    setState({ login: "", password: "" });
    localStorage.clear();
  };

  const { disabled, password } = state;
  return (
    <form>
      <h2>Login To Browse our shop! {login}</h2>
      <div className="control">
        <div>
          <label>Login: </label>
        </div>
        <input
          placeholder="your login..."
          value={state.login}
          onChange={(event) => setState({ login: event.target.value })}
        />
        <div className="errors">
          {/* <span>Login is required!</span> */}
          {/* <span>Login should be a valid email address</span> */}
        </div>
      </div>
      <div className="control">
        <div>
          <label>Password: </label>
        </div>
        <input
          placeholder="your password..."
          type="password"
          value={password}
          onChange={(event) => setState({ password: event.target.value })}
        />
        <div className="errors">
          {/* <span>Password is required!</span>
                <span>Password should be at least 8 characters</span> */}
        </div>
      </div>
      <button onClick={save}>Login</button>
      <button onClick={reset}>Reset</button>
    </form>
  );
}
