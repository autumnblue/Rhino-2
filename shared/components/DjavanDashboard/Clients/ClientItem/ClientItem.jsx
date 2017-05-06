import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import DashboardCard from '../../../Common/DashboardCard';

const Client = (props) =>
  <DashboardCard className="client-block">

    {props.open ? (
        <div className="opened-block">
            <div className="header">
                <div className="name">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="Name"
                        hintText="Should be blah blah"
                        fullWidth={true}
                        defaultValue={props.client.name}
                        name="name"
                    />
                </div>
                <div className="date">
                    <span>created 10/10/2016</span>
                </div>
                <div className="meridian">
                    <DropDownMenu 
                        className="dropdown"
                        value={"Test"} 
                        onChange={(value) => props.onPMChange(value)}
                        >
                        {_.map(props.clients, (client, index) => <div key={index}>{client}</div>)}
                    </DropDownMenu>
                </div>
                <FontAwesome
                    className='edit-icon'
                    name='compress'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    onClick={props.onToggle}
                />
            </div>
            <div className="information">
                <div className="name">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="short name"
                        hintText="Should be blah blah"
                        fullWidth={true}
                        defaultValue={props.client.short_name}
                        name="name"
                    />
                </div>
                <div className="code">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="ref code"
                        hintText="Should be blah blah"
                        fullWidth={true}
                        defaultValue={props.client.focal_email}
                        name="name"
                    />
                </div>
            </div>
            <div className="detail">

            </div>
            <div className="rateinfo">
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="hourly_rate"
                    hintText="Should be blah blah"
                    fullWidth={true}
                    defaultValue={props.client.hourly_rate}
                    name="rate"
                />
            </div>
            <div className="action">
                <RaisedButton default label="delete" onTouchTap={props.delete} />
            </div>
        </div>
    ) : (
        <div className="compressed-block">
            <div className="title">
                {props.client.name}
            </div>
            <FontAwesome
                className='edit-icon'
                name='edit'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                onClick={props.onToggle}
            />
        </div>
    )}
    
  </DashboardCard>;

export default Client;
