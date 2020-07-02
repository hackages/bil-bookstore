import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../store/actions";

export const Header = ({ title, username }) => {
  const showHeader = useSelector((state) => state.ui.showHeader);
  const dispatch = useDispatch();
  const history = useHistory();

  function logout() {
    localStorage.clear();
    dispatch(logoutAction());
    history.push("login");
  }

  if (!showHeader) {
    return null;
  }

  return (
    <>
      <header>
        <h1>{title}</h1>
        <div>
          <Link to="books">Books</Link>
          <Link to="laptops">Laptops</Link>
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
