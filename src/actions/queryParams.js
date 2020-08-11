export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE';
export const SET_PAGE = 'SET_PAGE';

export const setSearchTerm = search => ({
  type: SET_SEARCH_TERM,
  payload: search
});

export const setItemsPerPage = items => ({
  type: SET_ITEMS_PER_PAGE,
  payload: items
});

export const setPage = page => ({
  type: SET_PAGE,
  payload: page
});