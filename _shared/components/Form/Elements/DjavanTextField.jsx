import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanFormElement');

const DjavanTextField = ({ type = 'text', label = '', hint = '', help = '', error = '', max = '', icon = '', required = false, disabled = false, autoFocus = false, name, value, onChange, onBlur, noAutoComplete }) =>
  <div className={bem}>
    <div className={bem.el('label').mod({ required })}>{label}</div>
    <div className={bem.el('inputWrapper')}>
      <input
        name={name}
        className={bem.el('input').mod({ error: !!error, icon: !!icon })}
        type={type}
        placeholder={hint}
        defaultValue={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        maxLength={max}
        autoFocus={autoFocus}
        autoComplete={noAutoComplete ? 'off' : 'on'}
      />
      {icon && <div className={bem.el('icon').mod({ [icon]: true })} />}
    </div>
    {(error || help) &&
      <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>
        {error || help}
      </div>
    }
  </div>;


DjavanTextField.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string]),
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  noAutoComplete: PropTypes.bool,
  required: PropTypes.bool,
};

export default DjavanTextField;
