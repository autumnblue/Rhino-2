import { FormGroup  }from 'reactstrap'

import ServiceGroup from '../ServiceGroup'

const ServiceGroupArray = ({ fields }) => (
  <FormGroup tag="fieldset">
    <legend>Recurring Service Groups</legend>
    {fields.map((member) => (
      <ServiceGroup member={member} key={member} />
    ))}
  </FormGroup>
)

export default ServiceGroupArray;
