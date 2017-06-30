import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import Slider from 'material-ui/Slider';

const bem = makeBem('djavanFormElement');

const DjavanSlider = ({ label = '', help = '', error = '', disabled = false, name, value, min, max, step, onChange, profileReminder }) =>
  <div className={bem}>
    <div className={bem.el('label')}>{label}</div>
    <Slider
      name={name}
      className={bem.el('slider').mod({ error: !!error })}
      min={min}
      max={max}
      step={step}
      value={value === 0 ? 1000 : value}
      onChange={onChange}
      disabled={disabled}
    />
    <div className={bem.el('slider').mod({ start: true })}>{value}</div>
    <div className={bem.el('slider').mod({ end: true })} style={{ right: '-59.2rem' }}>{max}+</div>
    {(error || help) &&
      <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>
        {error || help}
      </div>
    }
  </div>;

DjavanSlider.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  profileReminder: PropTypes.bool,
};

export default DjavanSlider;
