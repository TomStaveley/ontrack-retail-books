import store from 'store';
import api from '../config/api';

import { BOOKS_DATA_STORAGE_PREFIX } from '../config/store';

export const GET_BOOKS = 'GET_BOOKS';
export const SET_BOOKS_ERROR = 'SET_BOOKS_ERROR';

export const getBooks = ({ searchTerm, itemsPerPage, page } = {}, callback) => async dispatch => {
  const params = {
    ...(searchTerm && { filters: [{ type: 'all', values: [searchTerm] }] }),
    ...(itemsPerPage && { itemsPerPage }),
    ...(page && { page })
  };

  const paramsStorageKey = `${BOOKS_DATA_STORAGE_PREFIX}${location.search.slice(1)}`;
  let booksData = store.get(paramsStorageKey);

  if (!booksData) {
    try {
      const { data } = await api.post('/books', params);
      store.set(paramsStorageKey, data);
      booksData = data;
    } catch (err) {
      dispatch({
        type: SET_BOOKS_ERROR,
        payload: 'Error fetching books data!'
      });
    }
  }

  if (booksData) {
    const { books, count } = booksData;

    dispatch({
      type: GET_BOOKS,
      payload: {
        books,
        count
      }
    });

    dispatch({
      type: SET_BOOKS_ERROR,
      payload: null
    });
  }

  if (typeof callback === 'function') {
    callback();
  }
};