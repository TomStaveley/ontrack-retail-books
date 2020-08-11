import { GET_BOOKS, SET_BOOKS_ERROR } from '../actions/books';

const defaultState = {
  books: [],
  count: 0,
  error: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      const { payload: { books, count } } = action;
      return {
        ...state,
        books,
        count
      };
    case SET_BOOKS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};