import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FiltersList from '../components/FiltersList';

const Filters = ({ count, queryParams }) => (
  <FiltersList
    count={count}
    queryParams={queryParams}
  />
);

Filters.propTypes = {
  count: PropTypes.number,
  queryParams: PropTypes.object
};

const mapStateToProps = state => ({
  count: state.books.count,
  queryParams: state.queryParams
});

export default connect(mapStateToProps)(Filters);