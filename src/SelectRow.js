import React, { Component } from 'react';
// update to prop-types package for react 16 prep
import PropTypes from 'prop-types';

const propTypes = {
  onRowCheckedChange: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  row: PropTypes.object.isRequired,
  isEnabled: PropTypes.func,
  CheckboxComponent: PropTypes.func,
};

class SelectRow extends Component {
  render() {
    const {
      onRowCheckedChange,
      isSelected,
      isEnabled,
      row,
      CheckboxComponent,
    } = this.props;
    const checked = isSelected(row);
    if (!isEnabled || isEnabled(row)) {
      if (CheckboxComponent) {
        return (<CheckboxComponent
          type="checkbox"
          checked={checked}
          onChange={() =>
            onRowCheckedChange(row)
          }
        />);
      }
      return (<input
        type="checkbox"
        checked={checked}
        onChange={() =>
          onRowCheckedChange(row)
        }
      />);
    }
    return null;
  }
}

SelectRow.propTypes = propTypes;
export default SelectRow;
