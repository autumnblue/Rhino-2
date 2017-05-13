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
    pms.push({ value: 1, label: client.project_manager.first_name + " " + client.project_manager.last_name });
    
    return pms;
}

const Client = (props) =>
  <DashboardCard className="clientEdit-Block">
      <div className="header">
        <div className="leftBlock">
            <a href="/">Clients</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <FontAwesome
                name='angle-right'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span></span>
        </div>
        <div className="rightBlock">
            <FloatingActionButton className="add" onTouchTap={() => props.onAdd()}>
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
                    disabled
                    floatingLabelFixed={true}
                    floatingLabelText="Company"
                    hintText="Acme Corporation"
                    fullWidth={true}
                    name="company"
                    onBlur={(e) => props.onUpdate(e, "company")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Name"
                    hintText="Client Name"
                    fullWidth={true}
                    name="name"
                    onBlur={(e) => props.onUpdate(e, "name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="URL"
                    hintText="Client URL"
                    fullWidth={true}
                    name="url"
                    onBlur={(e) => props.onUpdate(e, "url")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="hourly_rate"
                    hintText="Should be blah blah"
                    fullWidth={true}
                    name="rate"
                    onBlur={(e) => props.onUpdate(e, "hourly_rate")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Address"
                    hintText="Address"
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
                    hintText="Focal Name"
                    fullWidth={true}
                    name="focal_name"
                    onBlur={(e) => props.onUpdate(e, "focal_name")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Title"
                    hintText="Focal Title"
                    fullWidth={true}
                    name="focal_title"
                    onBlur={(e) => props.onUpdate(e, "focal_title")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Phone"
                    hintText="Focal Phone"
                    fullWidth={true}
                    name="focal_phone"
                    onBlur={(e) => props.onUpdate(e, "focal_phone")}
                />
                <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Focal Email"
                    hintText="Focal Email"
                    fullWidth={true}
                    name="focal_email"
                    onBlur={(e) => props.onUpdate(e, "focal_email")}
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
                    
                </div>
                <div className="drop">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="Ref Code"
                        hintText="Ref Code"
                        fullWidth={true}
                        name="code"
                        onBlur={(e) => props.onUpdate(e, "code")}
                    />
                </div>
                <div className="note">
                    <TextField
                        floatingLabelFixed={true}
                        floatingLabelText="Notes"
                        hintText="Notes"
                        fullWidth={true}
                        multiLine={true}
                        name="notes"
                        onBlur={(e) => props.onUpdate(e, "notes")}
                    />
                </div>
            </div>
            <div className="parentTitle">
                Parent
            </div>
            <div className="parentContainer">
                
            </div>
            <div className="departmentTitle">
                Department Clients
            </div>
            <div className="departmentContainer">
                
            </div>
        </div>
      </div>
  </DashboardCard>;

export default Client;
