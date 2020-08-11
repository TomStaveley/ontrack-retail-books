import { combineReducers } from 'redux';
import books from './books';
import queryParams from './queryParams';

export default combineReducers({
  books,
  queryParams
});