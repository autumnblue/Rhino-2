import { pure } from 'recompose';
import { FormGroup, Row, Col } from 'reactstrap';
import { Field } from 'redux-form';
import { func } from 'prop-types';

import { ReduxInput, ReduxDatePicker, ReduxOutputText } from 'src/components';


const propTypes = {
  onFieldChange: func.isRequired,
};

const enhance = pure;

const TimelineFormGroup = ({
  onFieldChange,
}) => (
  <FormGroup tag="fieldset">
    <legend>Timeline</legend>
    <Row>
      <Col lg="4" md="6" sm="12" xs="12">
        <FormGroup>
          <label>Sign By</label>
          <Field
            component={ReduxDatePicker}
            name="sign_by_date"
            onChange={onFieldChange}
          />
        </FormGroup>
      </Col>
      <Col lg="4" md="6" sm="12" xs="12">
        <FormGroup>
          <label>Expires On</label>
          <Field
            component={ReduxDatePicker}
            name="expires"
            onChange={onFieldChange}
          />
        </FormGroup>
      </Col>
      <Col lg="4" md="6" sm="12" xs="12">
        <FormGroup>
          <label>Signed On</label>
          <Field
            component={ReduxDatePicker}
            name="signed_date"
            onChange={onFieldChange}
          />
        </FormGroup>
      </Col>

      <Col lg="4" md="6" sm="12" xs="12">
        <FormGroup>
          <label>Start On</label>
          <Field
            component={ReduxDatePicker}
            name="start_date"
            onChange={onFieldChange}
          />
        </FormGroup>
      </Col>
      <Col lg="4" md="6" sm="12" xs="12">
        <FormGroup>
          <label>End On</label>
          <Field
            component={ReduxDatePicker}
            name="end_date"
            onChange={onFieldChange}
          />
        </FormGroup>
      </Col>
      <Col lg="4" md="6" sm="12" xs="12">
        <FormGroup>
          <label>Hours per day</label>
          <Field
            component={ReduxInput}
            name="hours_per_day"
            type="number"
            onBlur={onFieldChange}
          />
        </FormGroup>
      </Col>
      <Col lg="6" md="6" sm="12" xs="12">
        <FormGroup>
        Number of employees:{' '}
          <strong>
            <Field
              component={ReduxOutputText}
              name="number_of_employees"
            />
          </strong>
        </FormGroup>
      </Col>
      <Col lg="6" md="6" sm="12" xs="12">
        <FormGroup>
        Days to complete:{' '}
          <strong>
            <Field
              component={ReduxOutputText}
              name="days_to_complete"
            />
          </strong>
        </FormGroup>
      </Col>
    </Row>
  </FormGroup>
);

TimelineFormGroup.propTypes = propTypes;

export default enhance(TimelineFormGroup);
