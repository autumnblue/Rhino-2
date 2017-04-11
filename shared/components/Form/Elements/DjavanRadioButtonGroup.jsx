import React, { Component, PropTypes } from 'react';
import makeBem from 'bem-cx';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const bem = makeBem('djavanFormElement');

const DjavanRadioButtonGroup = ({ label = '', selected, hint = '', type = '', help = '', error = '', required = false, onChange, data }) =>
  <div className={bem}>
    <div className={bem.el('label').mod({ required })}>{label}</div>
    <RadioButtonGroup
      onChange={onChange}
      name={label}
      defaultSelected={selected}
    >
      {data.map((item, index) => <RadioButton
        key={index}
        label={item.label}
        value={item.value}
      />)}
    </RadioButtonGroup>
    {(error || help) && <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>{error || help}</div>}
  </div>;

DjavanRadioButtonGroup.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.any,
  hint: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.array,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default DjavanRadioButtonGroup;
