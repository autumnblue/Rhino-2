import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import DashboardCard from '../../../Common/DashboardCard';

const Client = (props) =>
  <DashboardCard className="client-block">
    <div className="title">
        Title
    </div>
    {props.open ? (
        <FontAwesome
            className='edit-icon'
            name='compress'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            onClick={props.onToggle}
        />
    ) : (
        <FontAwesome
            className='edit-icon'
            name='edit'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            onClick={props.onToggle}
        />
    )}
    
  </DashboardCard>;

export default Client;
