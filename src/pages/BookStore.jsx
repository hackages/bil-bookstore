import React, { useEffect, useState } from "react";
import { Search } from "../components/Search.component";
import { Link } from "react-router-dom";
import { getBooks } from "../mocks/books";
import { useDispatch, useSelector } from "react-redux";

export const BookStore = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.ui.loading);
  useEffect(() => {
    dispatch({ type: "HTTP_STARTED" });

    setTimeout(() => {
      getBooks().then(success).catch(error);

      function success(books) {
        dispatch({ type: "GETBOOKS_SUCCESS", payload: books });
      }

      function error(error) {
        dispatch({ type: "GETBOOKS_ERROR", payload: error });
      }
    }, 3000);
  }, []);

  if (loading) {
    return <div>Wait.... our servers are loading data.....</div>;
  }

  return (
    <>
      <Search></Search>
      <hr />
      <br />
      <div className="container">
        {books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`} className="item">
            <div className="module hero">
              <h4>{book.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
