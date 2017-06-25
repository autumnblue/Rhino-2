import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import Validation from 'react-validation';

import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import ReactTable from 'react-table'
import DashboardCard from '../../../Common/DashboardCard';
import '../../../../utils/validations';

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
                    <span></span>
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
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='name' validations={['required', 'alphaNormal']} onChange={(event) => props.onUpdate(event, "name")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Short Name*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='short_name' validations={['required', 'alphaSpecial']} onChange={(event) => props.onUpdate(event, "short_name")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        URL*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='url' validations={['required', 'url']} onChange={(event) => props.onUpdate(event, "url")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Rate*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='hourly_rate' validations={['required', 'hourly_rate']} onChange={(event) => props.onUpdate(event, "hourly_rate")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Address*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='address' validations={['required', 'address']} onChange={(event) => props.onUpdate(event, "address")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Focal name*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='focal_name' validations={['required', 'alphaNormal']} onChange={(event) => props.onUpdate(event, "focal_name")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Focal Title*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='focal_title' validations={['required', 'alphaNormal']} onChange={(event) => props.onUpdate(event, "focal_title")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Focal Phone*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='focal_phone' validations={['required', 'phone']} onChange={(event) => props.onUpdate(event, "focal_phone")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Focal Email*
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='focal_email' validations={['required', 'email']} onChange={(event) => props.onUpdate(event, "focal_email")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Notes
                        <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='notes' validations={[]} onChange={(event) => props.onUpdate(event, "notes")} />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Issuer*
                        <Validation.components.Select errorClassName='is-invalid-input' name='issuer' value='' validations={['required']} onChange={(value) => props.onUpdate(value, "issuer")}>
                            {
                                _.map(props.issuers, (issuer, key) => {return (
                                    <option key={key} value={issuer.id}>{issuer.label}</option>
                                )})
                            }
                            
                        </Validation.components.Select>
                    </label>
                </div>
            </div>
        </Validation.components.Form>
  </DashboardCard>;

export default Client;
