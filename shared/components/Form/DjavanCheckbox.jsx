import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

export default class DjavanCheckbox extends Component {

  state = {
    isChecked: this.props.value,
  };

  componentWillMount() {
    if (this.props.defaultChecked) {
      this.toggleCheckbox();
    }
  }

  toggleCheckbox = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });

    this.props.onCheck(this.props.itemLabel);
  }

  render() {
    return (
      <Checkbox
        label={this.props.label}
        checked={this.state.isChecked}
        disabled={this.props.disabled}
        onCheck={this.toggleCheckbox}
      />
    );
  }
}

DjavanCheckbox.propTypes = {
  label: PropTypes.string,
  onCheck: PropTypes.func,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  itemLabel: PropTypes.string,
};
