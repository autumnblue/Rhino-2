import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import RaisedButton from 'material-ui/RaisedButton';
import ReactTable from 'react-table'
import Validation from 'react-validation';
import '../../../../utils/validations';
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
      <Validation.components.Form onSubmit={(event) => props.onAdd(event)}>
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
                    <Validation.components.Button className='button'>
                        <FontAwesome
                            name='check'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    </Validation.components.Button>
                </div>
            </div>
            <div className="block">
                <div className="column">
                    <label>
                        Name*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.name} name='name' validations={['required', 'alphaNormal']} onChange={(event) => props.onUpdate(event, "name")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Short Name*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.short_name} name='short_name' validations={['required', 'alphaSpecial']} onChange={(event) => props.onUpdate(event, "short_name")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        URL*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.url} name='url' validations={['required', 'url']} onChange={(event) => props.onUpdate(event, "url")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Rate*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.hourly_rate} name='hourly_rate' validations={['required', 'hourly_rate']} onChange={(event) => props.onUpdate(event, "hourly_rate")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Address*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.address} name='address' validations={['required', 'alphaNormal']} onChange={(event) => props.onUpdate(event, "address")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Focal name*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.focal_name} name='focal_name' validations={['required', 'alphaNormal']} onChange={(event) => props.onUpdate(event, "focal_name")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Focal Title*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.focal_title} name='focal_title' validations={['required', 'alphaNormal']} onChange={(event) => props.onUpdate(event, "focal_title")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Focal Phone*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.focal_phone} name='focal_phone' validations={['required', 'phone']} onChange={(event) => props.onUpdate(event, "focal_phone")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Focal Email*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.focal_email} name='focal_email' validations={['required', 'email']} onChange={(event) => props.onUpdate(event, "focal_email")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Notes
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={props.client.notes} name='notes' validations={[]} onChange={(event) => props.onUpdate(event, "notes")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Parent
                        <Validation.components.Select errorClassName='is-invalid-input' name='parent' value='' validations={['required']} onChange={(value) => props.onUpdate(value, "parent")}>
                            {
                                _.map(props.parents, (parent, key) => {return (
                                    <option key={key} value={parent.id}>{parent.label}</option>
                                )})
                            }
                            
                        </Validation.components.Select>
                    </label>
                </div>
                <div className="column">
                    <label>
                        Project manager
                        <Validation.components.Select errorClassName='is-invalid-input' name='pm' value='' validations={['required']} onChange={(value) => props.onUpdate(value, "pm")}>
                            {
                                _.map(props.pms, (pm, key) => {return (
                                    <option key={key} value={pm.id}>{pm.label}</option>
                                )})
                            }
                            
                        </Validation.components.Select>
                    </label>
                </div>
                <div className="column">
                    {(!props.umbrella) && (
                        <div>
                            <div className="departmentTitle">
                                Department Clients
                            </div>
                            <div className="departmentContainer">
                                <ReactTable
                                    data={props.departments}
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
                <div className="column">
                    <RaisedButton
                        default
                        label="delete"
                        onTouchTap={props.onDelete}
                    />
                </div>
            </div>
        </Validation.components.Form>
  </DashboardCard>;

export default Client;
