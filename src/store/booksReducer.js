const initialState = {
  books: [],
};
export function booksReducer(state = initialState, action) {
  if (action.type === "GETBOOKS_SUCCESS") {
    return {
      ...state,
      books: action.payload,
    };
  }
  return state;
}
