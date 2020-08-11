import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import ReduxQuerySync from 'redux-query-sync';

import history from './history';
import reducers from '../reducers';
import { defaultState } from '../reducers/queryParams';
import { setSearchTerm, setItemsPerPage, setPage } from '../actions/queryParams';

export const BOOKS_DATA_STORAGE_PREFIX = 'booksData__';

export default () => {
  const middlewareEnhancer = applyMiddleware(reduxThunk);
  const storeEnhancer = ReduxQuerySync.enhancer({
    params: {
      search: {
        selector: state => state.queryParams.searchTerm,
        action: value => setSearchTerm(value),
        defaultValue: defaultState.searchTerm
      },
      items: {
        selector: state => state.queryParams.itemsPerPage,
        action: value => setItemsPerPage(value),
        stringToValue: string => Number.parseInt(string) || defaultState.itemsPerPage,
        defaultValue: defaultState.itemsPerPage
      },
      page: {
        selector: state => state.queryParams.page,
        action: value => setPage(value),
        stringToValue: string => Number.parseInt(string) || defaultState.page,
        defaultValue: defaultState.page
      }
    },
    initialTruth: 'location',
    replaceState: true,
    history
  });

  const composedEnhancers = compose(middlewareEnhancer, storeEnhancer);
  const store = createStore(reducers, composedEnhancers);

  return store;
};