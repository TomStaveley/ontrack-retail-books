import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Search from '../components/Search';
import BookCount from '../components/BookCount';
import ItemsPerPage from '../components/ItemsPerPage';

const FiltersList = ({ count, queryParams }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box mb={2}>
      <Grid container spacing={matchesSM ? 3 : 1}>
        <Grid
          item
          container
          xs={12} sm={4}
          justify={matchesSM ? 'flex-start' : 'center'}
          alignItems="center"
        >
          <Search queryParams={queryParams} fullWidth={!matchesSM} />
        </Grid>
        <Grid
          item
          container
          xs={6} sm={4}
          justify={matchesSM ? 'center' : 'flex-start'}
          alignItems="center"
        >
          <BookCount count={count} />
        </Grid>
        <Grid
          item
          container
          xs={6} sm={4}
          justify="flex-end"
          alignItems="center"
        >
          <ItemsPerPage queryParams={queryParams} />
        </Grid>
      </Grid>
    </Box>
  );
};

FiltersList.propTypes = {
  count: PropTypes.number,
  queryParams: PropTypes.object
};

export default FiltersList;