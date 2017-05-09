import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';

const List = (props) => (
    <div className="clientlistlist-block">
        <div className="listitem">
            <div className="main-info">
                <div>
                    Client_name
                </div>
                <div>
                    Client_Address
                </div>
            </div>
            <div className="order-info">
                <div className="row">
                    <FlatButton label="22 Service Orders" secondary />
                    <FlatButton label="55 Assessments" secondary />
                </div>
                <div className="row">
                    <FlatButton label="3 Departments" secondary />
                </div>
            </div>
            <div className="focal-info">
                <div>
                    Focal_name
                </div>
                <div>
                    Focal_Email
                </div>
                <div>
                    Focal_Phone_Number
                </div>
            </div>
            <div className="nav-container">
                <FontAwesome
                    name='arrow-right'
                    size='3x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </div>
        </div>
    </div>
);

export default List;