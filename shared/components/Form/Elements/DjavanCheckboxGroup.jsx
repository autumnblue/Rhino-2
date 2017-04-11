import React, { Component, PropTypes } from 'react';
import makeBem from 'bem-cx';
import DjavanCheckbox from '../DjavanCheckbox';

const bem = makeBem('djavanFormElement');


export default class DjavanCheckboxGroup extends Component {

  constructor() {
    super();
    this.state = {
      checkedSet: new Set(),
    };
  }

  componentWillMount() {
    if (this.props.checkedValues) {
      this.props.checkedValues.forEach((value) => {
        this.state.checkedSet.add(value);
      });
    }
  }

  onChange = (label) => {
    const value = this.props.items.filter((item) => item.label === label)[0].value;
    const currentSet = this.state.checkedSet;

    if (currentSet.has(value)) {
      currentSet.delete(value);
    } else {
      currentSet.add(value);
    }

    if (this.props.onChange) {
      this.props.onChange({ value: [...currentSet] });
    }
    this.setState({
      checkedState: currentSet,
    });
  };

  isChecked = (value) => this.state.checkedSet.has(value);

  render() {
    const { items, checkedValues, type = '', label = '', help = '', error = '', required = false, onChange } = this.props;
    if (!items) {
      return null;
    }

    const checkBoxes = items.map((item, index) =>
      <DjavanCheckbox
        itemLabel={item.label}
        key={`${item.value}-${index}`}
        label={this.props.noTranslate ? item.label : translations.translate(type, item.value.toUpperCase())}
        onCheck={this.onChange}
        value={this.isChecked(item.value)}
      />);

    return (
      <div className={bem}>
        <div className={bem.el('label').mod({ required })}>{label}</div>
        {checkBoxes}
        {(error || help) && <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>{error || help}</div>}
      </div>
    );
  }
}

DjavanCheckboxGroup.propTypes = {
  type: PropTypes.string,
  items: PropTypes.array,
  checkedValues: PropTypes.array,
  label: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  noTranslate: PropTypes.bool,
  required: PropTypes.bool,
};
