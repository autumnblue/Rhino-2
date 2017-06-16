import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ServiceItem from './ServiceItem.jsx';
import DebounceInput from 'react-debounce-input';

export default class Services extends Component {

  componentDidMount() {
    this.props.fetchServices(this.props.filter);
  }

  render() {
    return (
      <div className="services-block">
        {this.props.loading && <div className="services-loading">Loading...</div>}
        <div className="services-block-header">
          <div className="services-block-filter">
            <DebounceInput
              type="text"
              className="services-block-filter-input"
              debounceTimeout={300}
              placeholder="Filter..."
              onChange={(event) => {this.props.filterChanged(event.target.value)}}/>
          </div>
          <div className="services-block-create">
            <FontAwesome
              className='services-edit-arrow'
              name='plus-circle'
              size='5x'
              style={{ cursor: 'pointer' }}
              onClick={() => {this.props.edit()}}
            />
          </div>
        </div>
        {this.props.services.map((service) =>
          <ServiceItem
            service={service}
            key={service.id}
            orderChanged={(id, value) => {this.props.orderChanged(id, value, this.props.filter)}}
            edit={this.props.edit}
          />
        )}
      </div>
    )
  }
}
