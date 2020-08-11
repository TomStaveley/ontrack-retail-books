import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { getBooks } from '../actions/books';
import Filters from './Filters';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import ErrorAlert from '../components/ErrorAlert';
import { scrollToAnchor, purgeCache, setPageTitle } from '../utils/helpers';

const BookListContainer = ({ books, count, error, queryParams, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(error);

  useEffect(() => {
    purgeCache();
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      dispatch(getBooks(queryParams, () => {
        setIsLoading(false);
        scrollToAnchor();
        setPageTitle(queryParams);
      }));
    })();
  }, [queryParams]);

  useEffect(() => {
    setIsError(error);
  }, [error])

  const onErrorAlertClose = () => {
    setIsError(false);
  };

  return (
    <Box mt={2} mb={8}>
      <Filters />
      <BookList books={books} isLoading={isLoading} />
      <Pagination count={count} queryParams={queryParams} />
      <ErrorAlert open={!!isError} message={isError} onClose={onErrorAlertClose} />
    </Box>
  );
};

BookListContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  count: PropTypes.number,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  queryParams: PropTypes.object
};

const mapStateToProps = state => {
  const {
    books: {
      books,
      count,
      error
    },
    queryParams
  } = state;

  return {
    books,
    count,
    error,
    queryParams
  };
};

export default connect(mapStateToProps)(BookListContainer);