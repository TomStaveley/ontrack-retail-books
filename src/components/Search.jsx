import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, InputAdornment, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import history from '../config/history';
import { buildQueryString } from '../utils/queryParams';

const Search = ({ queryParams, fullWidth }) => {
  const [searchTerm, setSearchTerm] = useState(queryParams.searchTerm || '');

  useEffect(() => {
    setSearchTerm(queryParams.searchTerm);
  }, [queryParams]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      onSubmit(event);
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const searchParams = Object.assign({}, queryParams, { searchTerm, page: 1 });
    history.push(`/${buildQueryString(searchParams)}`);
  };

  return (
    <Input
      type="search"
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      value={searchTerm}
      placeholder="Search…"
      fullWidth={fullWidth}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            edge="end"
            size="small"
            onClick={e => onSubmit(e)}
          >
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

Search.propTypes = {
  queryParams: PropTypes.object,
  fullWidth: PropTypes.bool
};

export default Search;