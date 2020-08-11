import _ from 'lodash';
import queryString from 'query-string';

import { defaultState } from '../reducers/queryParams';

// Form new query parameter string
export const buildQueryString = (params = {}) => {
  // Limit new params to only certain keys
  params = _.pick(params, Object.keys(defaultState));

  // Omit any params which are equal to the defaults,
  // as defaults don't need to be added to the URL
  params = omitDefaults(params, defaultState);

  // Remap any params to their shorter, more URL friendly equivalents
  params = renameKeys(params, {
    searchTerm: 'search',
    itemsPerPage: 'items'
  });

  // Check for empty case
  if (_.isEmpty(params)) return '';

  // Define param order for consistent URLs
  const order = ['search', 'items', 'page'];

  // Build and return query string param
  return `?${queryString.stringify(params, {
    sort: (a, b) => order.indexOf(a) - order.indexOf(b)
  })}`;
};

// Remove any key-value pairs from obj that exist and match within defaultObj
const omitDefaults = (obj, defaultObj) =>
  Object.entries(obj).reduce((acc, [key, value]) =>
    Object.assign(acc, defaultObj[key] === value ? {} : { [key]: value }), {});

const renameKeys = (obj, keyMap) =>
  Object.keys(obj).reduce((acc, key) => {
    const renamedObject = {
      [keyMap[key] || key]: obj[key]
    };

    return {
      ...acc,
      ...renamedObject
    };
  }, {});