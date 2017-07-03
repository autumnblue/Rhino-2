import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SortPriority from './SortPriority'
import FontAwesome from 'react-fontawesome';

export default class ToolItem extends Component {
  render() {
    return (
      <Paper className="tools-item">
        <div className="tools-item-sort">
          <SortPriority
            value={this.props.service.default_sort_priority}
            id={this.props.service.id}
            valueChanged={this.props.orderChanged}
          />
        </div>
        <div className='tools-item-name'>
          {this.props.service.name}
        </div>
        <div className='tools-item-image'>
          {this.props.service.feature_image && <img src={this.props.service.feature_image.file} />}
        </div>
        <div className='tools-item-description-container'>
          <div className='tools-item-description'>
            {this.props.service.description}
          </div>
        </div>
        <div className='tools-item-edit'>
          <FontAwesome
            className='tools-edit-arrow'
            name='arrow-right'
            size='5x'
            style={{ cursor: 'pointer' }}
            onClick={() => {this.props.edit(this.props.service.id)}}
          />
        </div>
      </Paper>
    )
  }
}
