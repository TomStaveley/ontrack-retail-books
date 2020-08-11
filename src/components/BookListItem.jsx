import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import {
  PersonOutlineTwoTone as AuthorIcon,
  MenuBookTwoTone as PagesIcon,
  LocationCityTwoTone as PublishedIcon
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    height: '100%'
  },
  cardContent: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  title: {
    fontSize: '1rem',
    fontWeight: 500,
    marginBottom: theme.spacing(3)
  },
  bookAttributeLeftColumn: {
    [theme.breakpoints.only('xs')]: {
      maxWidth: '66.666667%',
      flexBasis: '66.666667%'
    }
  },
  bookAttributeRightColumn: {
    [theme.breakpoints.only('xs')]: {
      maxWidth: '33.333333%',
      flexBasis: '33.333333%'
    }
  },
  attribute: {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem'
  }
}));

const BookAttribute = ({ icon: Icon, children }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" wrap="nowrap" spacing={1}>
      {Icon && (
        <Grid item>
          <Icon fontSize="small" />
        </Grid>
      )}
      <Grid item>
        <Typography className={classes.attribute}>
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};

BookAttribute.propTypes = {
  Icon: PropTypes.element
};

const BookListItem = ({ book }) => {
  const classes = useStyles();

  const {
    book_title: title,
    book_author: author,
    book_publication_city: city,
    book_publication_country: country,
    book_publication_year: year,
    book_pages: pages
  } = book;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography variant="h2" className={classes.title}>{title}</Typography>
          <Grid container justify="space-between" spacing={1}>
            <Grid item container direction="column" justify="space-between" xs={12} xl={8} spacing={1} className={classes.bookAttributeLeftColumn}>
              <BookAttribute icon={AuthorIcon}>{author}</BookAttribute>
              <BookAttribute icon={PublishedIcon}>{`${city}, ${country}. ${year}.`}</BookAttribute>
            </Grid>
            <Grid item container direction="column" justify="flex-start" xs={12} xl={4} spacing={1} className={classes.bookAttributeRightColumn}>
              <BookAttribute icon={PagesIcon}>{`${pages} pages`}</BookAttribute>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

BookListItem.propTypes = {
  book: PropTypes.object
};

export default BookListItem;