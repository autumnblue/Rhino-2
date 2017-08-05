import { pure } from 'recompose';
import { FormGroup, Row, Col } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func, objectOf } from 'prop-types';

import { ReduxInput, ReduxDatePicker } from 'src/components';
import { userType, selectOptionsType } from 'src/prop-types';

import ReduxRevisions from './ReduxRevisions';

const propTypes = {
  userOptions: selectOptionsType.isRequired,
  usersData: objectOf(userType).isRequired,
  validationErrors: object.isRequired,

  onFieldChange: func.isRequired,
};

const enhance = pure;

const TeamFormGroup = ({
  userOptions,
  usersData,
  validationErrors,

  onFieldChange,
}) => (
  <FormGroup tag="fieldset">
    <legend>Revisions</legend>
    <Row>
      <Col md="6" lg="3">
        <FormGroup>
          <label>Revision</label>
          <Field
            component={ReduxInput}
            name="version"
            type="number"
            min="0"
            step="1"
            onBlur={onFieldChange}
            error={validationErrors.version}
          />
        </FormGroup>
      </Col>
      <Col md="6" lg="3">
        <FormGroup>
          <label>SO Number</label>
          <Field
            component={ReduxInput}
            name="client_so_num"
            type="number"
            step="1"
            onBlur={onFieldChange}
            error={validationErrors.client_so_num}
          />
        </FormGroup>
      </Col>
      <Col md="12" lg="6">
        <FormGroup>
          <label>Version</label>
          <Field
            component={ReduxDatePicker}
            name="version_date"
            onChange={onFieldChange}
            error={validationErrors.version_date}
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md="12">
        <Field
          component={ReduxRevisions}
          name="revisions"
          userOptions={userOptions}
          usersData={usersData}
          onChange={onFieldChange}
          error={validationErrors.revisions}
        />
      </Col>
    </Row>
  </FormGroup>
);

TeamFormGroup.propTypes = propTypes;

export default enhance(TeamFormGroup);
