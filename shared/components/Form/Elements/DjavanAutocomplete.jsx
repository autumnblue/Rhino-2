import React, { PropTypes, Component } from 'react';
import makeBem from 'bem-cx';
import AutoComplete from 'material-ui/AutoComplete';
import { djavanTheme, borderGrey, errorRed } from '../../../constants/djavanTheme';

const bem = makeBem('djavanFormElement');

const getStyles = (style, error) => Object.assign({}, style, {
  border: error ? `1px solid ${errorRed}` : `1px solid ${borderGrey}`,
});

export default class DjavanAutocomplete extends Component {
  static propTypes = {
    label: PropTypes.string,
    hint: PropTypes.string,
    help: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    clearOnSubmit: PropTypes.bool,
    required: PropTypes.bool,
    allowOnlyFromList: PropTypes.bool,
    autoSubmit: PropTypes.bool, // submit value as soon as we find it in data
  }

  static defaultProps = {
    label: '',
    hint: '',
    help: '',
    error: '',
    value: '',
    disabled: false,
    fullWidth: false,
    clearOnSubmit: false,
    autoSubmit: false,
    required: false,
  }

  state = {
    value: '',
    refInitialized: false,
    ref: null,
  }

  componentWillMount() {
    this.setState({
      value: this.props.value,
    });
  }

  onUpdateInput = (value) => {
    this.setState({ value });

    if (value === '') {
      this.submit(null, null);
      return;
    }

    if (this.props.autoSubmit) {
      const valueIndex = this.props.data.findIndex((e) => e.toLowerCase() === value.toLowerCase());
      if (valueIndex !== -1) {
        this.submit(value, valueIndex);
      }
    }
  }

  registerRef = (autoComplete) => {
    if (autoComplete !== null && typeof autoComplete !== 'undefined' && !this.state.refInitialized) {
      this.setState({
        refInitialized: true,
        ref: autoComplete,
      });
    }
  }

  submit = (value, index) => {
    if (value === null && index === null) {
      this.props.onChange(null, null);
      return;
    }

    if (!this.props.allowOnlyFromList || index !== -1) {
      this.props.onChange(value, index);
    }
    if (this.props.clearOnSubmit) {
      this.setState({ value: '' });
    }
    this.state.ref.focus();
  }

  filterItems = (searchText, key) => searchText !== '' && key.toLowerCase().indexOf(searchText.toLowerCase()) === 0

  render() {
    return (
      <div className={bem}>
        <div className={bem.el('label').mod({ required: this.props.required })}>{this.props.label}</div>
        <AutoComplete
          name={this.props.name}
          hintText={this.props.hint}
          filter={this.filterItems}
          dataSource={this.props.data}
          maxSearchResults={5}
          fullWidth={this.props.fullWidth}
          onNewRequest={this.submit}
          underlineStyle={djavanTheme.autoComplete.underlineStyle}
          underlineDisabledStyle={djavanTheme.autoComplete.underlineStyle}
          textFieldStyle={djavanTheme.autoComplete.hintStyle}
          style={getStyles(djavanTheme.autoComplete.style, this.props.error)}
          className="djavanFormElement__autocomplete"
          onUpdateInput={this.onUpdateInput}
          searchText={this.state.value}
          ref={(autoComplete) => this.registerRef(autoComplete)}
        />
        {(this.props.error || this.props.help) &&
          <div className={bem.el('message').mod({ error: !!this.props.error, help: !this.props.error && this.props.help })}>
            {this.props.error || this.props.help}
          </div>
        }
      </div>
    );
  }

}
