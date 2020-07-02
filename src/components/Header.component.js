import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../store/actions";

export const Header = ({ title, username }) => {
  const login = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();

  function logout() {
    localStorage.clear();
    // dispatch(logoutAction());
  }

  if (!login) {
    return null;
  }

  return (
    <>
      <header>
        <h1>{title}</h1>
        <div>
          <a routerLink="books">Books</a>
          <a routerLink="laptops">Laptops</a>
        </div>
        <div className="userinfo">
          <span>{username}</span>
          <button onClick={logout}>Logout</button>
        </div>
      </header>
      <hr />
      <br />
    </>
  );
};
