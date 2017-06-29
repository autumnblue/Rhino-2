import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';
import { push } from 'react-router-redux';

const List = (props) => (
    <div className="clientlistlist-block">
        {_.map(props.clients, (client, index) => 
            <div key={index} className="listitem">
                <div className="main-info">
                    <div>
                        {client.name}
                    </div>
                    <div>
                        {client.address}
                    </div>
                </div>
                <div className="order-info">
                    <div className="row">
                        <FlatButton label={client.service_order_count + " Service Orders"} secondary />
                        <FlatButton label={client.assessment_count + " Assessments"} secondary />
                    </div>
                    <div className="row">
                        <FlatButton label={client.departments.length + " Departments"} secondary />
                    </div>
                </div>
                <div className="focal-info">
                    <div>
                        {client.focal_name}
                    </div>
                    <div>
                        <a href={"mailto:" + client.focal_email}>{client.focal_email}</a>
                    </div>
                    <div>
                        {client.focal_phone}
                    </div>
                </div>
                <div className="nav-container">
                    <FontAwesome
                        name='arrow-right'
                        size='3x'
                        style={{ cursor: 'pointer', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        onClick={() => props.onSelect(client)}
                    />
                </div>
            </div>
        )}
    </div>
);

export default List;