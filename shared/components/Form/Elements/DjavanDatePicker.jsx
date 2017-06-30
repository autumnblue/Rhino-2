import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';
import { djavanTheme } from '../../../constants/djavanTheme';

const bem = makeBem('djavanFormElement');

const DjavanDatePicker = ({ label = '', hint = '', help = '', error = '', disabled = false, name, value, onChange }) =>
  <div className={bem}>
    <div className={bem.el('label')}>{label}</div>
    <DatePicker
      className={bem.el('datepicker').mod({ error: !!error })}
      hintText={hint}
      value={moment(value).isValid() ? new Date(value) : value}
      onChange={(nullValue, date) => onChange(moment(date).format('YYYY-MM-DD'))}
      disabled={disabled}
      container="inline"
      mode="landscape"
      textFieldStyle={djavanTheme.datePicker.textFieldStyle}
    />
    {(error || help) &&
      <div className={bem.el('message').mod({ error: !!error, help: !error && help })}>
        {error || help}
      </div>
    }
  </div>;

DjavanDatePicker.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DjavanDatePicker;
