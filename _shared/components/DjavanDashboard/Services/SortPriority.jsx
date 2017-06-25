import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';

export default class SortPriority extends Component {
  render() {
    return (
      <div style={{ height: '100px', width: '42px' }} className={this.props.className}>
        <FontAwesome
          name='arrow-up'
          size='3x'
          style={{ cursor: 'pointer' }}
          onClick={() => this.props.valueChanged(this.props.id, this.props.value - 1)}
        />
        <div style={{ width: '100%', textAlign: 'center'}}> {this.props.value || '-'} </div>
        <FontAwesome
          name='arrow-down'
          size='3x'
          style={{ cursor: 'pointer' }}
          onClick={() => this.props.valueChanged(this.props.id, this.props.value + 1)}
        />
      </div>
    )
  }
}
