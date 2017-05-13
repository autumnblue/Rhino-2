import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
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

function getDepartments(departments) {
    let data = [];

    _.map(departments, (department, key) =>
        data.push({
            clientname: department.name,
            focalname: department.focal_name,
            socount: department.service_order_count,
            asscount: department.assessment_count
        })
    );

    return data;
};

function getParents(umbrella) {
    let parents = [];
    
    if (umbrella == null) {
        parents.push({ value: 0, label: "None" });
    } else {
        parents.push({ value: 0, label: umbrella.name });
    }

    return parents;
}

function getPMs(client) {
    let pms = [];

    pms.push({ value: 0, label: "Default_PM" });
    if (client.project_manager !== null) {
        pms.push({ value: 1, label: client.project_manager.first_name + " " + client.project_manager.last_name });
    }
    
    return pms;
}

const Client = (props) =>
  <DashboardCard className="clientEdit-Block">
      <div className="header">
        <div className="leftBlock">
            <a href="/dashboard/clients/list">Clients</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <FontAwesome
                name='angle-right'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{props.client.name}</span>
        </div>
        <div className="rightBlock">
            <FloatingActionButton className="add" onTouchTap={() => props.onFinish()}>
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
                    hintText="Client Name"
                    fullWidth={true}
                    value={props.client.name ? props.client.name : ""}
                    name="name"
                    onChange={(e, field) => props.onChange(e, "name")}
                    onBlur={(e) => props.onUpdate(e, "name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Client Short Name"
                    hintText="Client Short Name"
                    fullWidth={true}
                    value={props.client.short_name ? props.client.short_name : ""}
                    name="short_name"
                    onChange={(e, field) => props.onChange(e, "short_name")}
                    onBlur={(e) => props.onUpdate(e, "short_name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="URL"
                    hintText="Client URL"
                    fullWidth={true}
                    value={props.client.url ? props.client.url : ""}
                    name="url"
                    onChange={(e, field) => props.onChange(e, "url")}
                    onBlur={(e) => props.onUpdate(e, "url")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="hourly_rate"
                    hintText="Should be blah blah"
                    fullWidth={true}
                    value={props.client.hourly_rate ? props.client.hourly_rate : ""}
                    name="hourly_rate"
                    onChange={(e, field) => props.onChange(e, "hourly_rate")}
                    onBlur={(e) => props.onUpdate(e, "hourly_rate")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Address"
                    hintText="Address"
                    fullWidth={true}
                    multiLine={true}
                    value={props.client.address ? props.client.address : ""}
                    name="address"
                    onChange={(e, field) => props.onChange(e, "address")}
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
                    hintText="Focal Name"
                    fullWidth={true}
                    value={props.client.focal_name ? props.client.focal_name : ""}
                    name="focal_name"
                    onChange={(e, field) => props.onChange(e, "focal_name")}
                    onBlur={(e) => props.onUpdate(e, "focal_name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Title"
                    hintText="Focal Title"
                    fullWidth={true}
                    value={props.client.focal_title ? props.client.focal_title : ""}
                    name="focal_title"
                    onChange={(e, field) => props.onChange(e, "focal_title")}
                    onBlur={(e) => props.onUpdate(e, "focal_title")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Phone"
                    hintText="Focal Phone"
                    fullWidth={true}
                    value={props.client.focal_phone ? props.client.focal_phone : ""}
                    name="focal_phone"
                    onChange={(e, field) => props.onChange(e, "focal_phone")}
                    onBlur={(e) => props.onUpdate(e, "focal_phone")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Email"
                    hintText="Focal Email"
                    fullWidth={true}
                    value={props.client.focal_email ? props.client.focal_email : ""}
                    name="focal_email"
                    onChange={(e, field) => props.onChange(e, "focal_email")}
                    onBlur={(e) => props.onUpdate(e, "focal_email")}
                />
            </div>
            
            <div className="action">
                <RaisedButton
                    default
                    label="delete"
                    onTouchTap={props.onDelete}
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
                <div className="drop">
                    <Select
                        name="form-field-name"
                        value={props.pm}
                        options={getPMs(props.client)}
                        onChange={(value) => props.onPM(value)}
                    />
                </div>
                <div className="drop">
                    <TextField
                        disabled
                        floatingLabelFixed={true}
                        floatingLabelText="Ref Code"
                        hintText="Ref Code"
                        fullWidth={true}
                        value={"Backend Needed"}
                        name="ref_code"
                        onChange={(e, field) => props.onChange(e, "ref_code")}
                        onBlur={(e) => props.onUpdate(e, "ref_code")}
                    />
                </div>
                <div className="note">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="Notes"
                        hintText="Notes"
                        fullWidth={true}
                        multiLine={true}
                        value={props.client.notes ? props.client.notes : ""}
                        name="notes"
                        onChange={(e, field) => props.onChange(e, "notes")}
                        onBlur={(e) => props.onUpdate(e, "notes")}
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
                    options={getParents(props.umbrella)}
                    onChange={(value) => props.onParent(value)}
                />
            </div>
            {(!props.umbrella) && (
                <div>
                <div className="departmentTitle">
                    Department Clients
                </div>
                <div className="departmentContainer">
                    <ReactTable
                        data={getDepartments(props.departments)}
                        columns={getColumns()}
                        showPagination={false}
                        defaultPageSize={5}
                        getTdProps={(state, rowInfo, column, instance) => {
                            return {
                                onClick: e => props.onRow(rowInfo)
                            }
                        }}
                    />
                </div>
                </div>
            )}
        </div>
      </div>
  </DashboardCard>;

export default Client;
