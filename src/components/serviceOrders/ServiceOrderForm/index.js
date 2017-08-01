import { Col, Row, Form, FormGroup } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func } from 'prop-types';

import { ReduxExpandableRichText } from 'src/components';
import { breadcrumbsType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  validationErrors: object.isRequired,
  breadcrumbs: breadcrumbsType.isRequired,

  onFieldChange: func.isRequired,
};

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
            label="Strategic Considerations"
            error={validationErrors.strategic_considerations}
          />
        </FormGroup>
      </Col>
    </Row>
  </Form>
);

ServiceOrderForm.propTypes = propTypes;

export default enhance(ServiceOrderForm);
