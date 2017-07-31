import { Col, Row, Form, FormGroup } from 'reactstrap';
import { Field } from 'redux-form' ;

import { ReduxExpandableRichText } from 'src/components';

import enhance from './enhance';

const propTypes = {};

const ServiceOrderForm = ({
    validationErrors,
    breadcrumbs,

    onFieldChange,
}) => (
  <Form>
    <Row>
      <Col md="6">
      <FormGroup>
        <label>Strategic Considerations</label>
        <Field
          component={ReduxExpandableRichText}
          name="strategic_considerations"
          onChange={onFieldChange}
          parentBreadcrumbs={breadcrumbs}
          label={'Strategic Considerations'}
          error={validationErrors.strategic_considerations}
        />
      </FormGroup>
      </Col>
    </Row>
  </Form>
);

ServiceOrderForm.propTypes = propTypes;

export default enhance(ServiceOrderForm);
