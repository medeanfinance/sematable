import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  tableFilterChanged,
  tableFilterTextChanged,
} from './actions.js';
import makeSelectors from './selectors';
import Filter from './Filter';

const mapStateToProps = (state, { tableName }) => {
  const selectors = makeSelectors(tableName);
  const isInitialized = selectors.getIsInitialized(state);

  if (!isInitialized) {
    return {
      isInitialized,
    };
  }

  return {
    isInitialized,
    value: selectors.getFilter(state),
    options: selectors.getFilterOptions(state),
  };
};

const mapDispatchToProps = (dispatch, { tableName }) => ({
  onChange: (filter) => dispatch(tableFilterChanged(tableName, filter)),
  onTextChange: (filterText) => dispatch(tableFilterTextChanged(tableName, filterText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  columns,
  isInitialized,
  ...otherProps
}) => {
  const hasFilterable = _.some(columns, 'filterable');
  if (!isInitialized) { return null; }
  return <Filter {...otherProps} hasFilterable={hasFilterable} />;
});
