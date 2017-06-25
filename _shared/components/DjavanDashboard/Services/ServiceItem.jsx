import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SortPriority from './SortPriority'
import FontAwesome from 'react-fontawesome';

export default class ServiceItem extends Component {
  render() {
    return (
      <Paper className="services-item">
        <div className="services-item-sort">
          <SortPriority
            value={this.props.service.default_sort_priority}
            id={this.props.service.id}
            valueChanged={this.props.orderChanged}
          />
        </div>
        <div className='services-item-name'>
          {this.props.service.name}
        </div>
        <div className='services-item-image'>
          {this.props.service.feature_image && <img src={this.props.service.feature_image.file} />}
        </div>
        <div className='services-item-description-container'>
          <div className='services-item-description'>
            {this.props.service.description}
          </div>
        </div>
        <div className='services-item-edit'>
          <FontAwesome
            className='services-edit-arrow'
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
