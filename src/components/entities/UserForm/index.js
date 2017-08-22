import { Col, Row, FormGroup, Form } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func } from 'prop-types';

import { ReduxInput, ReduxCheckbox, ReduxSelect, ReduxHidden } from 'src/components';

import RhinoProfileFormGroup from './RhinoProfileFormGroup'
import FocalProfileFormGroup from './FocalProfileFormGroup'
import enhance from './enhance';

const propTypes = {
  validationErrors: object.isRequired,

  onFieldChange: func.isRequired,
};

const typeOptions = [
  { value: 'rhino_profile', label: 'Rhino' },
  { value: 'focal_profile', label: 'Focal' },
  { value: 'wrong', label: 'Wrong (test)' }
];


const UserForm = ({
  profileType,
  validationErrors,

  onFieldChange,
  onSetProfileType,
}) => (
  <Form>
    <Field component={ReduxHidden} onFill={onSetProfileType} name="profile.entity_type" />
    <Row>
      <Col md="6">
        <FormGroup>
          <label>Profile Type</label>
          <Field
            component={ReduxSelect}
            name="profile.entity_type"
            searchable={false}
            clearable={false}
            onChange={onFieldChange}
            options={typeOptions}
            error={validationErrors.name}
          />
        </FormGroup>
        <FormGroup>
          <label>Email</label>
          <Field
            component={ReduxInput}
            type="text"
            name="email"
            placeholder="Email"
            onBlur={onFieldChange}
            error={validationErrors.email}
          />
        </FormGroup>
        <FormGroup>
          <label>Profile Title</label>
          <Field
            component={ReduxInput}
            type="text"
            name="profile.title"
            placeholder="Profile Title"
            onBlur={onFieldChange}
            error={validationErrors.email}
          />
        </FormGroup>
        <FormGroup>
          <label>First Name</label>
          <Field
            component={ReduxInput}
            type="text"
            name="first_name"
            placeholder="First Name"
            onBlur={onFieldChange}
            error={validationErrors.first_name}
          />
        </FormGroup>
        <FormGroup>
          <label>Last Name</label>
          <Field
            component={ReduxInput}
            type="text"
            name="last_name"
            placeholder="Last Name"
            onBlur={onFieldChange}
            error={validationErrors.last_name}
          />
        </FormGroup>
        <FormGroup>
          <label>Profile Phone</label>
          <Field
            component={ReduxInput}
            type="text"
            name="profile.phone"
            placeholder="Profile Phone"
            onBlur={onFieldChange}
            error={validationErrors.email}
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <Base
          exists={profileType === 'rhino_profile'}
          component={RhinoProfileFormGroup}
        />
        <Base
          exists={profileType === 'focal_profile'}
          component={FocalProfileFormGroup}
        />
      </Col>
    </Row>
  </Form>
);

UserForm.propTypes = propTypes;

export default enhance(UserForm);
