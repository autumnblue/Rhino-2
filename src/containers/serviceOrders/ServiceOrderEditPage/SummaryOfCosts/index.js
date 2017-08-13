import { FormGroup, Row, Col } from 'reactstrap';

import { formatMoney, formatAdjustment } from 'src/helpers';
import { FieldError} from 'src/components'

import ServiceGroupCosts from './ServiceGroupCosts';

const SummaryOfCosts = ({
  primaryServiceGroupCosts,
  serviceGroupsCosts,
  subtotal,
  total,
  serverSideTotal,
}) => (
  <FormGroup>
    <legend>Summary of Costs</legend>
    <Row>
    <Col lg="4" md="6" sm="6" xs="12">
      <ServiceGroupCosts
        name="Primary Service Group"
        subtotal={primaryServiceGroupCosts.subtotal}
        total={primaryServiceGroupCosts.total}
        instances={primaryServiceGroupCosts.instances}
        adjustments={primaryServiceGroupCosts.adjustments}
      />
    </Col>
    <Col lg="4" md="6" sm="6" xs="12">
      {serviceGroupsCosts.map(({
        serviceGroup,
        subtotal,
        total,
        instances,
        adjustments,

      }) => (
        <ServiceGroupCosts
          name={`Recurring Service Group #${serviceGroup.id}`}
          subtotal={subtotal}
          total={total}
          instances={instances}
          adjustments={adjustments}
        />
      ))}
    </Col>
    <Col lg="4" md="6" sm="12" xs="12">
      <p>
        Subtotal:
        {' '}
        <strong className="float-right">${formatMoney(subtotal)}</strong>
      </p>
      <p>
        <u>
        Total Due:
        </u>
        {' '}
        <strong className="float-right">
          <u>
            ${formatMoney(total)}
          </u>
        </strong>
        <FieldError error={
          total.toFixed(2) !== serverSideTotal.toFixed(2)
            ? `Client-side and server-side total_due value (which is equal to $${formatMoney(serverSideTotal)}) calculations are different!`
            : null
        } />
      </p>
    </Col>
    </Row>
  </FormGroup>
);

export default SummaryOfCosts;
