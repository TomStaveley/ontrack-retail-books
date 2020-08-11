import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, Typography, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import history from '../config/history';
import { buildQueryString } from '../utils/queryParams';

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginRight: theme.spacing(1)
  }
}));

const ItemsPerPage = ({ queryParams }) => {
  const classes = useStyles();
  const [itemsPerPage, setItemsPerPage] = useState(queryParams.itemsPerPage);

  useEffect(() => {
    setItemsPerPage(queryParams.itemsPerPage);
  }, [queryParams]);

  const handleChange = event => {
    const value = event.target.value;

    setItemsPerPage(value);
    const itemsPerPageParams = Object.assign({}, queryParams, { itemsPerPage: value, page: 1 });
    history.push(`/${buildQueryString(itemsPerPageParams)}`);
  };

  return (
    <FormControl className={classes.formControl}>
      <Typography className={classes.label}>Items:</Typography>
      <Select
        value={itemsPerPage}
        onChange={handleChange}
      >
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </FormControl>
  );
};

ItemsPerPage.propTypes = {
  queryParams: PropTypes.object
};

export default ItemsPerPage;