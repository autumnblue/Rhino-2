import { Col, Row, Form } from 'reactstrap';

import enhance from './enhance';

const propTypes = {};

const ServiceOrderForm = () => (
  <Form>
    <Row>
      <Col md="12">
        <h2>Service order form placeholder</h2>
      </Col>
    </Row>
  </Form>
);

ServiceOrderForm.propTypes = propTypes;

export default enhance(ServiceOrderForm);
