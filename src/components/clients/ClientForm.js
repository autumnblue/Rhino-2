const ClientForm = () => (
  <Row>
    <Col md="6">
    <div className="column">
            <h3>Client</h3>
          </div>
          <div className="column">
            <Field component="input" errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.name || ''} name='name' validations={['required', 'alphaNormal']} onBlur={this.handleChange.bind(this)} placeholder='Name' />
          </div>
          <div className="column">
            <Field component="input" errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.short_name || ''} name='short_name' validations={['required']} onBlur={this.handleChange.bind(this)} placeholder='Short Name' />
          </div>
          <div className="column">
            <Field component="input" errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.url || ''} name='url' validations={['required', 'url']} onBlur={this.handleChange.bind(this)} placeholder='URL'/>
          </div>
          <div className="column">
            <Field component="input" errorClassName='is-invalid-input' type="text" containerClassName='' value={this.props.client.hourly_rate || ''} name='hourly_rate' validations={['required', 'hourly_rate']} onBlur={this.handleChange.bind(this)} placeholder='Rate'/>
          </div>
          <div className="column">
            <Field component="textarea" errorClassName='is-invalid-input' containerClassName='' value={this.props.client.address || ''} name='address' validations={['required']} onBlur={this.handleChange.bind(this)} placeholder='Address'/>
          </div>
    </Col>
    <Col md="6">
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
    </Col>
    <Col md="6">
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
    </Col>
    <Col md="6">
      
    </Col>
  </Row>
)
