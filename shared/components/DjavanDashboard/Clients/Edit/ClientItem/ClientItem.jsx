import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import ReactTable from 'react-table'
import Select from 'react-select';
import DashboardCard from '../../../../Common/DashboardCard';

const Client = (props) =>
  <DashboardCard className="clientEdit-Block">
      <div className="block">
        <div className="leftBlock">
            <div className="clientTitle">
                Client
            </div>
            <div className="clientContainer">
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Company"
                    hintText="Acme Corporation"
                    fullWidth={true}
                    defaultValue={props.client.short_name}
                    name="company"
                    onBlur={(e) => props.onUpdateField(e, "company")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Name"
                    hintText="Client Name"
                    fullWidth={true}
                    defaultValue={props.client.name}
                    name="name"
                    onBlur={(e) => props.onUpdateField(e, "name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="URL"
                    hintText="Client URL"
                    fullWidth={true}
                    defaultValue={props.client.url}
                    name="url"
                    onBlur={(e) => props.onUpdateField(e, "url")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="hourly_rate"
                    hintText="Should be blah blah"
                    fullWidth={true}
                    defaultValue={props.client.hourly_rate}
                    name="rate"
                    onBlur={(e) => props.onUpdateField(e, "hourly_rate")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Address"
                    hintText="Address"
                    fullWidth={true}
                    multiLine={true}
                    defaultValue={props.client.address}
                    name="address"
                    onBlur={(e) => props.onUpdateField(e, "address")}
                />
            </div>

            <div className="focalTitle">
                Focal
            </div>
            <div className="focalContainer">
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal First Name"
                    hintText="Focal First Name"
                    fullWidth={true}
                    defaultValue={props.client.focal_name}
                    name="ffname"
                    onBlur={(e) => props.onUpdateField(e, "ffname")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Last Name"
                    hintText="Focal Last Name"
                    fullWidth={true}
                    defaultValue={props.client.focal_name}
                    name="flname"
                    onBlur={(e) => props.onUpdateField(e, "flname")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Title"
                    hintText="Focal Title"
                    fullWidth={true}
                    defaultValue={props.client.focal_title}
                    name="ftitle"
                    onBlur={(e) => props.onUpdateField(e, "ftitle")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Phone"
                    hintText="Focal Phone"
                    fullWidth={true}
                    defaultValue={props.client.focal_phone}
                    name="fphone"
                    onBlur={(e) => props.onUpdateField(e, "fphone")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Email"
                    hintText="Focal Email"
                    fullWidth={true}
                    defaultValue={props.client.focal_email}
                    name="femail"
                    onBlur={(e) => props.onUpdateField(e, "femail")}
                />
            </div>
            
            <div className="action">
                <RaisedButton default label="delete" onTouchTap={props.onDelete} />
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
                <div className="drop">
                    <Select
                        name="form-field-name"
                        value={props.option}
                        options={props.options}
                        onChange={(value) => props.onOptions(value)}
                    />
                </div>
                <div className="drop">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="Ref Code"
                        hintText="Ref Code"
                        fullWidth={true}
                        defaultValue={props.client.ref_code}
                        name="code"
                        onBlur={(e) => props.onUpdateField(e, "code")}
                    />
                </div>
                <div className="note">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="Notes"
                        hintText="Notes"
                        fullWidth={true}
                        multiLine={true}
                        defaultValue={props.client.notes}
                        name="notes"
                        onBlur={(e) => props.onUpdateField(e, "notes")}
                    />
                </div>
            </div>
            <div className="parentTitle">
                Parent
            </div>
            <div className="parentContainer">
                <Select
                    name="form-field-name"
                    value={props.parent}
                    options={props.parents}
                    onChange={(value) => props.onParents(value)}
                />
            </div>
            <div className="departmentTitle">
                Department Clients
            </div>
            <div className="departmentContainer">
                <ReactTable
                    data={props.data}
                    columns={props.columns}
                    showPagination={false}
                    defaultPageSize={5}
                />
            </div>
        </div>
      </div>
  </DashboardCard>;

export default Client;
