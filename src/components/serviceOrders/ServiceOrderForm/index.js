import { Col, Row, FormGroup, Form } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func } from 'prop-types';

import { ReduxInput, ReduxCheckbox } from 'src/components';

import enhance from './enhance';

const propTypes = {
  validationErrors: object.isRequired,

  onFieldChange: func.isRequired,
};

const ServiceOrderForm = ({
  validationErrors,

  onFieldChange,
}) => (
  <Form>
    <Row>
      <Col md="12">
        <h2>SO form placeholder</h2>
      </Col>
    </Row>
  </Form>
);

ServiceOrderForm.propTypes = propTypes;

export default enhance(ServiceOrderForm);
