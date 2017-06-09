import React, { Component } from 'react';
import Validation from 'react-validation';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import SortPriority from '../SortPriority';

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

  render() {
    return (
      <div className="services-edit-block">

        {this.props.loading && <div className="services-edit-loading">Loading...</div>}

        <div className="services-edit-header">


        </div>

        {this.props.service != null &&
        <Validation.components.Form onSubmit={(event) => false} ref={form => { this.form = form }}>
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
            <div className="services-edit-html">
              <Validation.components.Textarea
                name='html_body'
                value={this.props.service.html_body || ''}
                validations={['required']}
                onBlur={this.handleChange.bind(this)}
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
        </Validation.components.Form>
        }
      </div>
    )
  }
}
