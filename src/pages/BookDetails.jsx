import React, { useEffect, useState } from "react";
import { getBookById } from "../mocks/books";
import { Redirect, useHistory } from "react-router-dom";

export const BookDetails = ({ bookId }) => {
  const [state, setState] = useState({ book: null, errors: null });
  const history = useHistory();

  useEffect(() => {
    getBookById(bookId).then(success).catch(error);

    function success(book) {
      setState({ ...state, book });
    }
    function error(errors) {
      setState({ ...state, errors });
    }
  }, []);

  if (state.errors) {
    return <Redirect to="/books"></Redirect>;
  }

  const book = state.book;
  return (
    <form formGroup="form">
      {book && (
        <>
          <h2>{book.title}</h2>
          <div class="control">
            <div class="label">
              <label>Id: </label>
            </div>
            <input disabled value={book.id} />
          </div>
          <div class="control">
            <div class="label">
              <label>Title: </label>
            </div>
            <input placeholder="book title" value={book.title} />
          </div>
          <div class="control">
            <button click="save()">Save</button>
            <button
              onClick={(event) => {
                event.preventDefault();
                history.goBack();
              }}
            >
              Back
            </button>
          </div>
        </>
      )}
    </form>
  );
};
