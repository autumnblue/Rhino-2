import { Col, Row, FormGroup, Form, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func } from 'prop-types';

import { ReduxInput, ReduxSelect } from 'src/components';
import { selectOptionsType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  parentsOptions: selectOptionsType.isRequired,
  issuersOptions: selectOptionsType.isRequired,
  projectManagerOptions: selectOptionsType.isRequired,
  validationErrors: object,

  onFieldChange: func.isRequired,
};

const ClientForm = ({
  parentsOptions,
  issuersOptions,
  projectManagerOptions,
  validationErrors,

  onFieldChange,
}) => (
  <Form>
    <Row>
      <Col md="6">
        <FormGroup tag="fieldset">
          <legend>Client</legend>
          <FormGroup>
            <Label>Name</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="name"
              placeholder="Name"
              onBlur={onFieldChange}
              error={validationErrors.name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Short Name</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="short_name"
              placeholder="Short Name"
              onBlur={onFieldChange}
              error={validationErrors.short_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>URL</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="url"
              placeholder="URL"
              onBlur={onFieldChange}
              error={validationErrors.url}
            />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Field
              component={ReduxInput}
              type="textarea"
              name="address"
              placeholder="Address"
              onBlur={onFieldChange}
              error={validationErrors.address}
            />
          </FormGroup>
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup tag="fieldset">
          <legend>Focal</legend>
          <FormGroup>
            <Label>Focal First Name</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="focal_first_name"
              placeholder="Focal First Name"
              onBlur={onFieldChange}
              error={validationErrors.focal_first_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Focal Last Name</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="focal_last_name"
              placeholder="Focal Last Name"
              onBlur={onFieldChange}
              error={validationErrors.focal_last_name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Focal Title</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="focal_title"
              placeholder="Focal Title"
              onBlur={onFieldChange}
              error={validationErrors.focal_title}
            />
          </FormGroup>
          <FormGroup>
            <Label>Focal Phone</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="focal_phone"
              placeholder="Focal Phone"
              onBlur={onFieldChange}
              error={validationErrors.focal_phone}
            />
          </FormGroup>
          <FormGroup>
            <Label>Focal Email</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="focal_email"
              placeholder="Focal Email"
              onBlur={onFieldChange}
              error={validationErrors.focal_email}
            />
          </FormGroup>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md="12">
        <FormGroup tag="fieldset">
          <legend>Management</legend>
          <FormGroup>
            <label>Issuer</label>
            <Field
              component={ReduxSelect}
              name="issuer"
              options={issuersOptions}
              placeholder="Issuer"
              onChange={onFieldChange}
              error={validationErrors.issuer}
            />
          </FormGroup>

          <FormGroup>
            <label>Project Manager</label>
            <Field
              component={ReduxSelect}
              name="project_manager"
              options={projectManagerOptions}
              placeholder="Project Manager"
              onChange={onFieldChange}
              error={validationErrors.project_manager}
            />
          </FormGroup>

          <FormGroup>
            <label>Parent</label>
            <Field
              component={ReduxSelect}
              name="umbrella"
              options={parentsOptions}
              placeholder="Parent"
              onChange={onFieldChange}
              error={validationErrors.umbrella}
            />
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label>Notes</Label>
          <Field
            component={ReduxInput}
            name="notes"
            type="textarea"
            placeholder="Notes"
            onBlur={onFieldChange}
            error={validationErrors.notes}
          />
        </FormGroup>
      </Col>
    </Row>
  </Form>
);

ClientForm.propTypes = propTypes;

export default enhance(ClientForm);
