import React, { Component } from 'react';
import { Link } from 'react-router';
import Validation from 'react-validation';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FontAwesome from 'react-fontawesome';
import SortPriority from '../SortPriority';
import RichEdit from './RichEdit';
import {debounce} from 'throttle-debounce';

export default class Services extends Component {
  componentDidMount() {
    this.props.setService(null);
    this.props.fetchService(this.props.params.id);
  }

  priorityChanged(id, value) {
    if (value > 0) {
      this.saveServiceValue('default_sort_priority', value, true);
    }
  }

  handleChange(event) {
    this.form.validateAll();
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.form.getErrors();
    if (this.props.service.id) {
      if (this.props.service[name] != value) {
        this.saveServiceValue(name, value, _.isEmpty(errors[name]));
      }
    } else {
      this.saveServiceValue(name, value, false);
      if (_.isEmpty(errors)) {
        let service = this.props.service;
        service[name] = value;
        this.props.createService(service);
      }
    }
  }

  handleChangeHtmlBody(value) {
    if (this.props.service.id && value) {
      this.saveServiceValue('html_body', value, true);
    }
  }

  saveServiceValue(name, value, shouldSave) {
    let newValue = {};
    newValue[name] = value;
    this.props.setService({...this.props.service, ...newValue});
    if (shouldSave) {
      this.props.saveServiceValue(this.props.service.id, name, value);
    }
  }

  handleFileUpload(event) {
    let file = event.target.files[0];
    this.props.uploadAsset(file, this.props.service);
  }

  deleteService() {
    this.props.deleteService(this.props.service);
  }


  safeExit() {
    if (this.props.route.htmlbody) {
      this.props.goBackToEntity(this.props.service.id || '');
      return;
    }
    if (this.props.service.id) {
      this.props.goServicesPage();
    } else {
      let errors = this.form.validateAll();
      if (!_.isEmpty(errors)) {
        this.props.dialogLeaveOpen();
      }
    }
  }

  render() {
    const dialogLeaveActions = [
      <RaisedButton
        className="services-edit-dialog-yes"
        label="Yes"
        primary={true}
        onTouchTap={() => {
          this.props.dialogLeaveClose();
          this.props.goServicesPage();
        }}
      />,
      <RaisedButton
        label="No"
        primary={false}
        onTouchTap={this.props.dialogLeaveClose}
      />,
    ];

    let headerBreadcrumbs = '';
    if (this.props.service) {
      if (this.props.route.htmlbody) {
        let entityLink = '/dashboard/services/edit';
        if (this.props.service.id) {
          entityLink += '/' + this.props.service.id;
        }
        headerBreadcrumbs = <span>
          <Link to={entityLink}>{this.props.service.name || 'Entity'}</Link>
          >
          Html Body
        </span>
      } else {
        headerBreadcrumbs = this.props.service.name || '';
      }
    }

    return (
      <div className="services-edit-block">

        {this.props.loading && <div className="services-edit-loading">Loading...</div>}

        <div className="services-edit-header">
          {this.props.service != null && <div className="services-edit-links">
            <Link to="/dashboard/services/">Services</Link>
            >
            {headerBreadcrumbs}
          </div>}
          <FontAwesome
            className='services-edit-link-services'
            name='check-circle-o'
            size='5x'
            style={{ cursor: 'pointer' }}
            onClick={this.safeExit.bind(this)}
          />
        </div>

        {this.props.service != null &&
        <Paper className="services-edit-paper">
        <Validation.components.Form onSubmit={(event) => false} ref={form => { this.form = form }}>

          {this.props.route.htmlbody && <RichEdit value={this.props.service.html_body} onChange={debounce(500, this.handleChangeHtmlBody.bind(this))} />}

          {!this.props.route.htmlbody && <div>
          <div className="services-edit-left">
            <h2>Service</h2>
            <SortPriority
              className="services-edit-sort"
              valueChanged={this.priorityChanged.bind(this)}
              value={this.props.service.default_sort_priority}
            />
            <div className="services-edit-name">
                <Validation.components.Input
                  type='text'
                  name='name'
                  errorClassName='is-invalid-input'
                  value={this.props.service.name || ''}
                  validations={['required', 'alphaNormal']}
                  onBlur={this.handleChange.bind(this)}
                />
            </div>
            <div className="services-edit-description">
              <Validation.components.Textarea
                name='description'
                value={this.props.service.description || ''}
                validations={['required']}
                onBlur={this.handleChange.bind(this)}
              />
            </div>
            <div className="clear-fix"></div>
            <div className="services-edit-html">
              <div className="services-edit-html-container"
                   dangerouslySetInnerHTML={{__html: this.props.service.html_body || ''}}>
              </div>
              <RaisedButton
                label="Edit"
                secondary={true}
                onClick={() => {this.props.editHtmlBody(this.props.service.id)}}
              />
            </div>
            <RaisedButton
              label="Delete"
              secondary={true}
              disabled={!this.props.service.id}
              onClick={this.deleteService.bind(this)}
            />
          </div>
          <div className="services-edit-right">
            <h2>Featured image</h2>
            {this.props.service.feature_image && <img src={this.props.service.feature_image.file} className="services-edit-image" />}
            <input type="file" className="services-edit-uplaod-button" onChange={this.handleFileUpload.bind(this)} disabled={!this.props.service.id} />
          </div>
          </div>}
        </Validation.components.Form>
          <Dialog
            actions={dialogLeaveActions}
            modal={false}
            open={this.props.dialogLeaveShow}
            onRequestClose={this.props.dialogLeaveClose}
          >
            There is error and service is NOT saved yet, are you sure you wan't to leave?
          </Dialog>
          <div className="clear-fix"></div>
        </Paper>
        }
      </div>
    )
  }
}
