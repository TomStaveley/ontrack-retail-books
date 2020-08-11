import {
  SET_SEARCH_TERM,
  SET_ITEMS_PER_PAGE,
  SET_PAGE
} from '../actions/queryParams';

export const defaultState = {
  searchTerm: '',
  itemsPerPage: 20,
  page: 1
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.payload
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};