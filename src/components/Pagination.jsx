import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, useMediaQuery } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem } from '@material-ui/lab';

import { buildQueryString } from '../utils/queryParams';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  paginationItem: {
    margin: '0 2px'
  }
}));

const BookListPagination = ({ count, queryParams }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.up('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  const { itemsPerPage, page } = queryParams;
  const pages = Math.ceil(count / itemsPerPage);

  return (
    <Box mt={3} className={classes.wrapper}>
      {pages > 1 && (
        <Pagination
          page={page}
          count={pages}
          color="primary"
          shape="rounded"
          size={matchesXS ? matchesSM ? 'large' : 'medium' : 'small'}
          siblingCount={matchesSM ? 2 : 1}
          renderItem={item => {
            const paginationItemParams = Object.assign({}, queryParams, { page: item.page });

            return (
              <PaginationItem
                classes={{ root: classes.paginationItem }}
                component={Link}
                to={location => ({
                  ...location,
                  pathname: '/',
                  search: buildQueryString(paginationItemParams)
                })}
                {...item}
              />
            );
          }}
        />
      )}
    </Box>
  );
};

BookListPagination.propTypes = {
  count: PropTypes.number,
  queryParams: PropTypes.object
};

export default BookListPagination;