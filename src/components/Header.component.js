import React from "react";

export const Header = ({ title, username }) => (
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
