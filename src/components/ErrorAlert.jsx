import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const ErrorAlert = ({ open, message, onClose }) => (
  <Snackbar
    open={open}
    onClose={onClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
  >
    <Alert elevation={6} variant="filled" severity="error" onClose={onClose}>{message}</Alert>
  </Snackbar>
);

ErrorAlert.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func
};

export default ErrorAlert;