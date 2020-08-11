import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const BookCount = ({ count }) => <Typography>{`${count} result${count === 1 ? '' : 's'}`}</Typography>;

BookCount.propTypes = {
  count: PropTypes.number
};

export default BookCount;