import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import _ from 'lodash';

// import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import ContentRemove from 'material-ui/svg-icons/content/remove';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
import DjavanCheckbox from './DjavanCheckbox';
import renderList from '../../Renderers/HTML/SelectMenuItem';

import DjavanSelectField from './Elements/DjavanSelectField';
import DjavanAutocomplete from './Elements/DjavanAutocomplete';
import DjavanTextField from './Elements/DjavanTextField';
import DjavanNonnegativeIntegerField from './DjavanNonnegativeIntegerField';
import DjavanRadioButtonGroup from './Elements/DjavanRadioButtonGroup';
import DjavanCheckboxGroup from './Elements/DjavanCheckboxGroup';

import radioButtonLabels from '../../constants/radioButtonLabels';

const bem = makeBem('djavanFormElement');

export default class InputField extends Component {

  state = {
    date: {
      day: '',
      month: '',
      year: '',
    },
    counter: 0,
  };

  componentWillMount() {
    this.selectedCheckboxes = new Set();
    const { question, value } = this.props;
    if (value) {
      if (question === 'birthDate' || question === 'startDate' || question === 'endDate') {
        this.convertToDate(value);
      }
    }
  }

  convertToDate = (value) => {
    const { birthDate } = this.state;
    const dob = value.split(/[.,/-]/);

    birthDate.date = dob[2];
    birthDate.month = dob[1];
    birthDate.year = dob[0];

    this.setState({
      birthDate,
    });
  }

  handleDate = (field) => async (e) => {
    const date = this.state.date;

    date[field] = e.target.value;
    await this.setState({
      date,
    });

    this.props.onChange({
      question: this.props.question,
      value: `${date.year}-${date.month}-${date.date}`,
    });
  }

  handleChange = (e) => {
    const data = {
      question: this.props.question,
      value: e.target.value,
    };
    this.props.onChange(data);
  }

  handleAutocomplete = (value, index) => {
    if (value) {
      const data = this.props.data[index];
      this.props.onChange({
        question: this.props.question,
        value: data.id,
      });
    } else {
      this.props.onChange({
        question: this.props.question,
        value: '',
      });
    }
  }

  handleSelectChange = (event, index, value) => {
    this.props.onChange({ question: this.props.question, value });
  }

  handleBoolChange = (e) => {
    const data = {
      question: this.props.question,
    };
    if (e.target.value === 'true') {
      data.value = true;
    } else {
      data.value = false;
    }
    this.props.onChange(data);
  }

  handleNumberChange = (e) => {
    this.props.onChange({
      question: this.props.question,
      value: e.target.value << 0,
    });
  }

  handleCounterChange = (value) => {
    this.props.onChange({
      question: this.props.question,
      value: value << 0,
    });
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

    const data = {
      question: this.props.question,
      value: [...this.selectedCheckboxes],
    };

    this.props.onChange(data);
  }

  renderBasedOnQuestion = (question) => {
    switch (question) {
      case 'name':
      case 'firstName':
      case 'lastName':
      case 'email':
        return this.renderBasedOnType({ type: 'text' });

      case 'password':
        return this.renderBasedOnType({ type: 'password' });

      // case 'counter':
      //   return this.renderBasedOnType({ type: 'counter' });

      // case 'date':
      //   return this.renderBasedOnType({ type: 'date' });

      case 'rememberMe':
        return this.renderBasedOnType({ type: 'checkbox' });

      // case 'bool':
      //   return this.renderBasedOnType({ type: 'bool' });

      // case 'select':
      //   return this.renderBasedOnType({ type: 'select' });

      default:
        console.log('unknown question: ', question);
    }
    return null;
  }


  // renderSelectOption = (array) => {
  //   if (!array) return false;
  //   return array.map((value, index) => {
  //     const optionValue = value.name || value.value || value.id;
  //     const key = index;
  //     return (
  //       <option value={optionValue} key={key}>
  //         {value.name || value.value || value.country}
  //       </option>
  //     );
  //   });
  // }

  renderSelectOptionBasedOnQuestion = (question, data) => {
    switch (question) {
      case 'select':
        return renderList(data);
      default:
        return '';
    }
  }

  renderBasedOnType = ({ type }) => {
    switch (type) {
      case 'text':
      case 'password':
        return (<DjavanTextField
          label={this.props.label}
          type={type}
          name={this.props.question}
          icon={this.props.icon}
          hint={this.props.hint}
          help={this.props.help}
          error={this.props.error}
          value={this.props.value}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          autoFocus={this.props.autoFocus}
          required={this.props.required}
        />);
      case 'date':
        return this.renderDate();
      case 'number':
        return (<DjavanTextField
          label={this.props.label}
          type={type}
          name={this.props.question}
          icon={this.props.icon}
          hint={this.props.hint}
          help={this.props.help}
          error={this.props.error}
          value={this.props.value}
          onChange={this.handleNumberChange}
          disabled={this.props.disabled}
        />);
      case 'counter':
        return (
          <DjavanNonnegativeIntegerField
            label={this.props.label}
            type={type}
            name={this.props.question}
            icon={this.props.icon}
            hint={this.props.hint}
            help={this.props.help}
            error={this.props.error}
            value={this.props.value}
            onChange={this.handleNumberChange}
            disabled={this.props.disabled}
            maxValue={this.props.maxValue}
          />
        );
      case 'select':
        return (
          <DjavanSelectField
            label={this.props.label}
            name={this.props.question}
            value={this.props.value}
            onChange={this.handleSelectChange}
            error={this.props.error}
            disabled={this.props.disabled}
            hint={this.props.hint}
            help={this.props.help}
            fullWidth={this.props.fullWidth}
            required={this.props.required}
          >
            {this.renderSelectOptionBasedOnQuestion(this.props.question, this.props.data)}
          </DjavanSelectField>
        );
      case 'bool': {
        const data = [
          { label: radioButtonLabels(this.props.question).true,
            value: 'true',
          },
          { label: radioButtonLabels(this.props.question).false,
            value: 'false',
          },
        ];
        return (
          <DjavanRadioButtonGroup
            label={this.props.label}
            selected={(this.props.value !== 'null' && typeof this.props.value !== 'undefined') ? this.props.value.toString() : null}
            name={this.props.question}
            onChange={(value) => this.handleBoolChange(value)}
            data={data}
            required={this.props.required}
          />
        );
      }
      case 'checkbox':
        return (
          <DjavanCheckbox
            itemLabel={this.props.label}
            label={this.props.label}
            checked={this.props.value}
            disabled={this.props.disabled}
            onCheck={this.toggleCheckbox}
          />
        );
      case 'checkboxGroup':
        return (
          <DjavanCheckboxGroup
            label={this.props.label}
            checked={this.props.value}
            disabled={this.props.disabled}
            onCheck={this.toggleCheckbox}
          />
        );
      case 'autocomplete':
        return (
          <DjavanAutocomplete
            name={this.props.question}
            label={this.props.label}
            help={this.props.help}
            error={this.props.error}
            hint={this.props.hint}
            value={this.props.value}
            data={this.props.data.map((obj) => (obj.country || obj.name))}
            fullWidth={this.props.fullWidth}
            onChange={this.handleAutocomplete}
            allowOnlyFromList
          />
        );
      default:
        return '';
    }
  }

  render() {
    const { question, label } = this.props;
    return (
      <div className={bem} >
        <div className={bem.el('label').mod({ required: this.props.required })}>{label}</div>
        {this.renderBasedOnQuestion(question)}
      </div>
    );
  }
}

InputField.propTypes = {
  question: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array,
  categories: PropTypes.array,
  error: PropTypes.string,
  hint: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  autoFocus: PropTypes.bool,
  help: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  maxValue: PropTypes.number,
  labelsFor: PropTypes.string,
  allowFirst: PropTypes.bool,
  required: PropTypes.bool,
};
