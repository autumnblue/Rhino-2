import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ServiceItem from './ServiceItem.jsx';

export default class Services extends Component {

  componentDidMount() {
    this.props.fetchServices();
  }

  render() {
    return (
      <div className="services-block">
        {this.props.loading && <div className="services-loading">Loading...</div>}
        <div className="services-block-header">
          <FontAwesome
            className='services-edit-arrow'
            name='plus-circle'
            size='5x'
            style={{ cursor: 'pointer' }}
            onClick={() => {this.props.edit()}}
          />
        </div>
        {this.props.services.map((service) =>
          <ServiceItem
            service={service}
            key={service.id}
            orderChanged={this.props.orderChanged}
            edit={this.props.edit}
          />
        )}
      </div>
    )
  }
}
