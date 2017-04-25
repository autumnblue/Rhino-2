import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';

const bem = makeBem('djavanFormElement');

export default class DjavanTextArea extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    hint: PropTypes.string,
    help: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    hint: '',
    help: '',
    error: '',
    disabled: false,
    required: false,
  }

  state = {
    textArea: null,
    height: 94,
  }

  onChange(value) {
    this.setSize();
    this.props.onChange(value);
  }

  setTextAreaRef(textArea) {
    if (this.state.textArea === null) {
      this.setState({ textArea }, () => {
        this.setSize();
      });
    }
  }

  setSize() {
    const textArea = this.state.textArea;
    const prevHeight = this.state.height;
    this.setState({
      height: Math.max(textArea.scrollHeight, 94),
    }, () => {
      if (this.state.height !== prevHeight) { // On Chrome, scrollHeight doesn't want to be set to it's minimum on the first try
        this.setSize();                       // So we have to call setSize until it finds it's minimum
      }
    });
  }

  render() {
    return (
      <div className={bem}>
        <div className={bem.el('label').mod({ required: this.props.required })}>{this.props.label}</div>
        <textarea
          ref={(textArea) => this.setTextAreaRef(textArea)}
          name={this.props.name}
          className={bem.el('textarea').mod({ error: !!this.props.error })}
          placeholder={this.props.hint}
          defaultValue={this.props.value}
          onChange={(val) => this.onChange(val)}
          disabled={this.props.disabled}
          rows={this.state.rows}
          style={{ resize: 'none', height: this.state.height }}
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
