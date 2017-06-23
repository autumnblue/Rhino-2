import React, { Component } from 'react';
import { Link } from 'react-router';
import Validation from 'react-validation';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';
import RaisedButton from 'material-ui/RaisedButton';
import ReactTable from 'react-table';

export default class Edit extends Component {
  componentDidMount() {
    this.props.setClient(null);
    this.props.fetchClient(this.props.params.id);
    this.props.fetchParentsAndIssuers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.client && this.props.client.id != this.props.params.id) {
      this.componentDidMount();
    }
  }

  handleChange(event) {
    this.form.validateAll();
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.form.getErrors();

    if (name == 'umbrella' && value == 0) {
      value = null;
    }

    if (!this.props.client.id) {
      this.saveValue(name, value, _.isEmpty(errors));
    } else {
      this.saveValue(name, value, _.isEmpty(errors[name]));
    }
  }

  saveValue(name, value, shouldSaveOnServer) {
    this.props.saveValue(this.props.client, name, value, shouldSaveOnServer);
  }

  safeExit() {
    if (this.props.client.id) {
      this.props.goToClients();
    } else {
      let errors = this.form.validateAll();
    }
  }

  render() {
   let that = this;
   return <div className="clients-edit-block">
    {this.props.loading && <div className="clients-edit-loading">Loading...</div>}
    {this.props.client !== null && <Validation.components.Form onSubmit={(event) => false} ref={form => { this.form = form }}>
        <div className="clients-edit-header">
          <div className="float-left">
            <Link to="/dashboard/clients/list">Clients</Link>
            <FontAwesome
              name='angle-right'
              className="clients-edit-header-arrow"
            />
            {this.props.client.umbrellaName && <span>
              {this.props.client.umbrellaName}
              <FontAwesome
                name='angle-right'
                className="clients-edit-header-arrow"
              />
            </span>}
            {this.props.client.name}
          </div>
          <div className="float-right">
            <FontAwesome
              className='clients-edit-link-services'
              name='check-circle-o'
              size='3x'
              style={{ cursor: 'pointer' }}
              onClick={this.safeExit.bind(this)}
            />
          </div>
        </div>

        <div className="clients-edit-main-block">
          <div className="clients-edit-sub-block float-left">
            <div className="column">
              <h3>Client</h3>
            </div>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.name || ''} name='name' validations={['required', 'alphaNormal']} onBlur={this.handleChange.bind(this)} placeholder='Name' />
            </div>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.short_name || ''} name='short_name' validations={['required']} onBlur={this.handleChange.bind(this)} placeholder='Short Name' />
            </div>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.url || ''} name='url' validations={['required', 'url']} onBlur={this.handleChange.bind(this)} placeholder='URL'/>
            </div>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.hourly_rate || ''} name='hourly_rate' validations={['required', 'hourly_rate']} onBlur={this.handleChange.bind(this)} placeholder='Rate'/>
            </div>
            <div className="column">
              <Validation.components.Textarea errorClassName='is-invalid-input' containerClassName='' value={this.props.client.address || ''} name='address' validations={['required']} onBlur={this.handleChange.bind(this)} placeholder='Address'/>
            </div>

            <h3>Focal</h3>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.focal_first_name || ''} name='focal_first_name' validations={['required']} onBlur={this.handleChange.bind(this)} placeholder='Focal first name'/>
            </div>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.focal_last_name || ''} name='focal_last_name' validations={['required']} onBlur={this.handleChange.bind(this)} placeholder='Focal last name'/>
            </div>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.focal_title || ''} name='focal_title' validations={['required']} onBlur={this.handleChange.bind(this)} placeholder='Focal Title'/>
            </div>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.focal_phone || ''} name='focal_phone' validations={['required', 'phone']} onBlur={this.handleChange.bind(this)} placeholder='Focal Phone'/>
            </div>
            <div className="column">
              <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.focal_email || ''} name='focal_email' validations={['required', 'email']} onBlur={this.handleChange.bind(this)} placeholder='Focal Email'/>
            </div>
          </div>


          <div className="clients-edit-sub-block float-right">
            <div className="column">
              <h3 className="float-right">Managment</h3>
            </div>
            <div className="clear-fix"></div>
            <div className="column">
              <div className="float-right">
              <Validation.components.Select className="float-right" errorClassName='is-invalid-input float-right' name='issuer' value={this.props.client.issuer} validations={['required']} disabled={this.props.issuers == null} onChange={this.handleChange.bind(this)} >
                {!this.props.client.issuer && <option value={0}>N/A</option> }
                {
                  _.map(this.props.issuers, (issuer, key) => {return (
                    <option key={key} value={issuer.id}>{issuer.name}</option>
                  )})
                }
              </Validation.components.Select>
              </div>
            </div>
            <div className="column">
              <Validation.components.Select className="float-right" errorClassName='is-invalid-input' name='project_manager' value='' validations={[]} onChange={this.handleChange.bind(this)}>
                {
                  _.map(this.props.projectManagers, (pm, key) => {return (
                    <option key={key} value={pm.id}>{pm.label}</option>
                  )})
                }
              </Validation.components.Select>
            </div>
            <div className="column">
              <Validation.components.Textarea className="float-right" errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.notes || ''} name='notes' validations={[]} onBlur={this.handleChange.bind(this)} placeholder='Notes'/>
            </div>
            <div className="clear-fix"></div>

            <div className="column">
              <h3 className="float-right">Parent</h3>
            </div>
            <div className="clear-fix"></div>
            <div className="column">
              <Validation.components.Select className="float-right" errorClassName='is-invalid-input' name='umbrella' value={this.props.client.umbrella} validations={[]} disabled={this.props.parents == null} onChange={this.handleChange.bind(this)} >
                {
                  _.map(this.props.parents, (parent, key) => {return (
                    parent.id != this.props.client.id && <option key={key} value={parent.id}>{parent.name}</option>
                  )})
                }
              </Validation.components.Select>
            </div>

            <div className="clear-fix"></div>

            {this.props.client.departments && this.props.client.departments.length > 0 && (
              <div className="departmentContainer">
                <div className="column">
                  <h3 className="float-right">Department Clients</h3>
                </div>

                <div className="column">
                  <ReactTable
                    data={this.props.client.departments}
                    columns={[
                    {
                        header: 'Client Name',
                        accessor: 'name'
                    }, {
                        header: 'Focal Name',
                        accessor: 'focal_first_name'
                    }, {
                        header: 'SO Count',
                        accessor: 'service_order_count',
                        render: data => <span className='number'>{data.value}</span>
                    }, {
                        header: 'Assessment Count',
                        accessor: 'assessment_count',
                        render: data => <span className='number'>{data.value}</span>
                    }
                  ]}
                    showPagination={false}
                    defaultPageSize={5}
                    getTrProps={(state, rowInfo, column, instance) => {
                      return {
                        onClick: function () {that.props.goToEdit(rowInfo.row.id)},
                        className: 'depTableRow',
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="clear-fix"></div>
          <div className="column">
            <RaisedButton
              default
              label="delete"
              disabled={!this.props.client.id}
              onTouchTap={() => this.props.delete(this.props.client.id)}
            />
          </div>
        </div>
      </Validation.components.Form>}
    </div>
  }
}
