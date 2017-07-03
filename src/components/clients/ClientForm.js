import { Col, Row, FormGroup, Form, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { compose, pure, withPropsOnChange } from 'recompose';
import { ReduxInput, ReduxSelect } from 'src/components';

const selectsOptionsEnhancer = withPropsOnChange([
  'parents',
  'issuers',
  'users',
], ({ parents, issuers, users }) => ({
  parentsOptions: parents.map(({ id, name }) => ({
    value: id,
    label: name,
  })),
  issuersOptions: issuers.map(({ id, name }) => ({
    value: id,
    label: name,
  })),
  projectManagerOptions: users.map(({ id, first_name, last_name }) => ({
    value: id,
    label: first_name && last_name ?
      `${first_name} ${last_name}` :
      <em>Empty name</em>,
  })),
}));

const enhance = compose(
  selectsOptionsEnhancer,
  pure,
);

const ClientForm = ({
  parentsOptions,
  issuersOptions,
  projectManagerOptions,
  validationErrors,

  onBlur,
}) => (
  <Form>
    <Row>
      <Col md="6">
        <FormGroup tag="fieldset">
          <legend>Client</legend>
          <FormGroup>
            <Label>Name</Label>
            <Field component={ReduxInput} type="text" name="name" placeholder="Name" onBlur={onBlur} error={validationErrors.name} />
          </FormGroup>
          <FormGroup>
            <Label>Short Name</Label>
            <Field component={ReduxInput} type="text" name="short_name" placeholder="Short Name" onBlur={onBlur} error={validationErrors.short_name} />
          </FormGroup>
          <FormGroup>
            <Label>URL</Label>
            <Field component={ReduxInput} type="text" name="url" placeholder="URL" onBlur={onBlur} error={validationErrors.url} />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Field component={ReduxInput} type="textarea" name="address" placeholder="Address" onBlur={onBlur} error={validationErrors.address} />
          </FormGroup>
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup tag="fieldset">
          <legend>Focal</legend>
          <FormGroup>
            <Label>Focal First Name</Label>
            <Field component={ReduxInput} type="text" name="focal_first_name" placeholder="Focal First Name" onBlur={onBlur} error={validationErrors.focal_first_name} />
          </FormGroup>
          <FormGroup>
            <Label>Focal Last Name</Label>
            <Field component={ReduxInput} type="text" name="focal_last_name" placeholder="Focal Last Name" onBlur={onBlur} error={validationErrors.focal_last_name} />
          </FormGroup>
          <FormGroup>
            <Label>Focal Title</Label>
            <Field component={ReduxInput} type="text" name="focal_title" placeholder="Focal Title" onBlur={onBlur} error={validationErrors.focal_title} />
          </FormGroup>
          <FormGroup>
            <Label>Focal Phone</Label>
            <Field component={ReduxInput} type="text" name="focal_phone" placeholder="Focal Phone" onBlur={onBlur} error={validationErrors.focal_phone} />
          </FormGroup>
          <FormGroup>
            <Label>Focal Email</Label>
            <Field component={ReduxInput} type="text" name="focal_email" placeholder="Focal Email" onBlur={onBlur} error={validationErrors.focal_email} />
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
            <Field component={ReduxSelect} name="issuer" options={issuersOptions} placeholder="Issuer" />
          </FormGroup>

          <FormGroup>
            <label>Project Manager</label>
            <Field component={ReduxSelect} name="project_manager" options={projectManagerOptions} placeholder="Project Manager" />
          </FormGroup>

          <FormGroup>
            <label>Parent</label>
            <Field component={ReduxSelect} name="umbrella" options={parentsOptions} placeholder="Parent" />
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label>Notes</Label>
          <Field component={ReduxInput} name="notes" type="textarea" placeholder="Notes" onBlur={onBlur} />
        </FormGroup>
      </Col>
    </Row>
  </Form>
);


export default enhance(ClientForm);
