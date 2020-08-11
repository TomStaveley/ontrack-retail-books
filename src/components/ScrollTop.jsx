import React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';

import { scrollToAnchor } from '../utils/helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = ({ children }) => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event) => {
    scrollToAnchor();
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ScrollTop;