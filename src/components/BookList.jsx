import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import BookListItem from './BookListItem';

const useStyles = makeStyles(theme => ({
  root: {
    opacity: ({ isLoading }) => isLoading ? 0.5 : 1,
    transition: 'opacity 150ms linear'
  }
}));

const BookList = ({ books, isLoading }) => {
  const classes = useStyles({ isLoading });

  return (
    <Grid container spacing={2} className={classes.root}>
      {books.map(book => <BookListItem key={book.id} book={book} />)}
    </Grid>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool
};

export default BookList;