import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import ReactTable from 'react-table'
import Select from 'react-select';
import DashboardCard from '../../../Common/DashboardCard';

function getColumns() {
    let columns = [{
        header: 'Client Name',
        accessor: 'clientname'
    }, {
        header: 'Focal Name',
        accessor: 'focalname'
    }, {
        header: 'SO Count',
        accessor: 'socount',
        render: props => <span className='number'>{props.value}</span>
    }, {
        header: 'Assessment Count',
        accessor: 'asscount',
        render: props => <span className='number'>{props.value}</span>
    }];

    return columns;
}


const Client = (props) =>
  <DashboardCard className="clientEdit-Block">
      <form onSubmit={(event) => props.onAdd(event)}>
      <div className="header">
        <div className="leftBlock">
            <a href="/dashboard/clients/list">Clients</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <FontAwesome
                name='angle-right'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span></span>
        </div>
        <div className="rightBlock">
            <FloatingActionButton type="submit" className="add">
                <FontAwesome
                    name='check'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </FloatingActionButton>
        </div>
      </div>
      <div className="block">
        <div className="leftBlock">
            <div className="clientTitle">
                Client
            </div>
            <div className="clientContainer">
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Name"
                    fullWidth={true}
                    name="name"
                    onBlur={(e) => props.onUpdate(e, "name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Short Name"
                    fullWidth={true}
                    name="short_name"
                    onBlur={(e) => props.onUpdate(e, "short_name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="URL"
                    fullWidth={true}
                    name="url"
                    type="url"
                    onBlur={(e) => props.onUpdate(e, "url")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="hourly_rate"
                    fullWidth={true}
                    name="hourly_rate"
                    type="number"
                    onBlur={(e) => props.onUpdate(e, "hourly_rate")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Address"
                    fullWidth={true}
                    multiLine={true}
                    name="address"
                    onBlur={(e) => props.onUpdate(e, "address")}
                />
            </div>

            <div className="focalTitle">
                Focal
            </div>
            <div className="focalContainer">
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Name"
                    fullWidth={true}
                    name="focal_name"
                    onBlur={(e) => props.onUpdate(e, "focal_name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Title"
                    fullWidth={true}
                    name="focal_title"
                    onBlur={(e) => props.onUpdate(e, "focal_title")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Phone"
                    fullWidth={true}
                    name="focal_phone"
                    type="number"
                    onBlur={(e) => props.onUpdate(e, "focal_phone")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Email"
                    fullWidth={true}
                    name="focal_email"
                    type="email"
                    onBlur={(e) => props.onUpdate(e, "focal_email")}
                />
            </div>
        </div>
        <div className="rightBlock">
            <div className="manageTitle">
                Management
            </div>
            <div className="manageContainer">
                <div className="date">
                    <span>created 10/10/2016</span>
                </div>
                <div className="note">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="Notes"
                        fullWidth={true}
                        multiLine={true}
                        name="notes"
                        onBlur={(e) => props.onUpdate(e, "notes")}
                    />
                </div>
            </div>
            <div className="departmentTitle">
                Issuer
            </div>
            <div className="departmentContainer">
                <Select
                    name="issuer"
                    value={props.issuer}
                    options={props.issuers}
                    onChange={(value) => props.onUpdate(value, "issuer")}
                />
            </div>
        </div>
      </div>
      </form>
  </DashboardCard>;

export default Client;
