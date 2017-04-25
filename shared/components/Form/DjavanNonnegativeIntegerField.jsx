import React, { PropTypes, Component } from 'react';
import makeBem from 'bem-cx';
import DjavanTextField from './Elements/DjavanTextField';

const bem = makeBem('djavanFormElement');

export default class DjavanNonnegativeIntegerField extends Component {
  render = () => (
    <DjavanTextField
      {...this.props}
      onChange={({ target: { value } }) => {
        if (value === '') {
          this.props.onChange({ target: { value: null } });
        } else {
          const asInt = parseInt(value, 10);
          const event = { target: { value: asInt } };
          Number.isNaN(asInt) || asInt < 0 || asInt > this.props.maxValue || this.props.onChange(event);
        }
      }}
      value={this.props.value === null || this.props.value === undefined ? '' : this.props.value.toString()}
    />
  );
}

DjavanNonnegativeIntegerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  maxValue: PropTypes.number,
};
