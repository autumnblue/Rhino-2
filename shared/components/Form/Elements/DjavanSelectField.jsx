import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import SelectField from 'material-ui/SelectField';
import { djavanTheme, borderGrey, errorRed } from '../../../constants/djavanTheme';

const bem = makeBem('djavanFormElement');

const getStyles = (style, error) => Object.assign({}, style, {
  border: error ? `1px solid ${errorRed}` : `1px solid ${borderGrey}`,
});

const DjavanSelectField = ({ label = '', hint = '', help = '', error = '', required = false, disabled = false, fullWidth = false, name, value, onChange, children }) =>
  <div className={bem}>
    <div className={bem.el('label').mod({ required })}>{label}</div>
    <SelectField
      name={name}
      maxHeight={300}
      value={value}
      onChange={onChange}
      disabled={disabled}
      hintText={hint}
      autoWidth={false}
      fullWidth={fullWidth}
      underlineStyle={djavanTheme.selectField.underlineStyle}
      underlineDisabledStyle={djavanTheme.selectField.underlineStyle}
      iconStyle={djavanTheme.selectField.iconStyle}
      hintStyle={djavanTheme.selectField.hintStyle}
      style={getStyles(djavanTheme.selectField.style, error)}
      className={bem.el('select').toString()}
    >
      {children}
    </SelectField>
    {(error || help) &&
      <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>
        {error || help}
      </div>
    }
  </div>;

DjavanSelectField.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default DjavanSelectField;
