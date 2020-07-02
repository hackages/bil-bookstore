import React from "react";
import { useSelector } from "react-redux";

export const Header = ({ title, username }) => {
  const login = useSelector((state) => state.auth.login);

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
          <button click="logout()">Logout</button>
        </div>
      </header>
      <hr />
      <br />
    </>
  );
};
