import { Col, Row, FormGroup, Form, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { compose, pure, withPropsOnChange } from 'recompose';
import { ReduxInput, ReduxSelect } from 'src/components';

export const validate = (values) => {
  const requiredFields = [
    'name', 'short_name', 'url', 'address', 'focal_first_name',
    'focal_last_name', 'focal_title', 'focal_phone', 'focal_email'
  ];
  const errors = {};

  for(const fieldName of requiredFields) {
    if(!values[fieldName]) {
      errors[fieldName] = `${fieldName} is required`;
    }
  }

  return errors;
}

const selectsOptionsEnhancer = withPropsOnChange([
  'parents',
  'issuers',
  'users'
], ({ parents, issuers, users }) => ({
  parentsOptions: parents.map(({ id, name }) => ({
    value: id,
    label: name
  })),
  issuersOptions: issuers.map(({ id, name }) => ({
    value: id,
    label: name
  })),
  projectManagerOptions: users.map(({ id, first_name, last_name }) => ({
    value: id,
    label: first_name && last_name ?
      `${first_name} ${last_name}` :
      <em>Empty name</em>
  }))
}));

const enhance = compose(
  selectsOptionsEnhancer,
  pure,
)

const ClientForm = ({
  parentsOptions,
  issuersOptions,
  projectManagerOptions,

  onBlur,
}) => (
  <Form>
  <Row>
    <Col md="6">
      <FormGroup tag="fieldset">
        <legend>Client</legend>
        <FormGroup>
        <Label>Name</Label>
        <Field component={ReduxInput} type="text" name="name" placeholder="Name" onBlur={onBlur} />
        </FormGroup>
        <FormGroup>
        <Label>Short Name</Label>
        <Field component={ReduxInput} type="text" name="short_name" placeholder="Short Name" onBlur={onBlur} />
        </FormGroup>
        <FormGroup>
        <Label>URL</Label>
        <Field component={ReduxInput} type="text" name="url" placeholder="URL" onBlur={onBlur} />
        </FormGroup>
        <FormGroup>
        <Label>Address</Label>
        <Field component={ReduxInput} type="textarea" name="address" placeholder="Address" onBlur={onBlur} />
        </FormGroup>
      </FormGroup>
    </Col>
    <Col md="6">
      <FormGroup tag="fieldset">
        <legend>Focal</legend>
        <FormGroup>
        <Label>Focal First Name</Label>
        <Field component={ReduxInput} type="text" name="focal_first_name" placeholder="Focal First Name" onBlur={onBlur} />
        </FormGroup>
        <FormGroup>
        <Label>Focal Last Name</Label>
        <Field component={ReduxInput} type="text" name="focal_last_name" placeholder="Focal Last Name" onBlur={onBlur} />
        </FormGroup>
        <FormGroup>
        <Label>Focal Title</Label>
        <Field component={ReduxInput} type="text" name="focal_title" placeholder="Focal Title" onBlur={onBlur} />
        </FormGroup>
        <FormGroup>
        <Label>Focal Phone</Label>
        <Field component={ReduxInput} type="text" name="focal_phone" placeholder="Focal Phone" onBlur={onBlur} />
        </FormGroup>
        <FormGroup>
        <Label>Focal Email</Label>
        <Field component={ReduxInput} type="text" name="focal_email" placeholder="Focal Email" onBlur={onBlur} />
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
)


export default enhance(ClientForm);
