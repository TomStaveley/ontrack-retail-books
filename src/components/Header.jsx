import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LibraryBooks as LibraryBooksIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
    textDecoration: 'none'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 500
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Link to="/" className={classes.logo}>
            <LibraryBooksIcon className={classes.icon} />
            <Typography variant="h1" className={classes.title}>Book List</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Header;