import { FormGroup, Table } from 'reactstrap'
import { Field } from 'redux-form';
import { compose, pure, withState, withHandlers } from 'recompose'

import { ReduxOutputText, Select, Button } from 'src/components';

import ServiceInstanceItem from '../ServiceInstanceItem'

const serviceEnhancer = withState('serviceValue', 'onSetService', null);

const handlersEnhancer = withHandlers({
  onAdd: ({ onAdd, serviceValue }) => () => onAdd({
    service: serviceValue
  })
})

const enhance = compose(
  serviceEnhancer,
  handlersEnhancer,
  pure,
)

const ServiceInstanceArray = ({
  fields,
  serviceOptions,
  serviceInstanceValidationErrors,

  serviceValue,
  onSetService,
  onAdd,
  onDelete,
  onEdit,
}) => (
  <FormGroup tag="fieldset">
  
    <legend>Selected Services</legend>
    <Table>
      <tbody>
        {fields.map(member => (
          <ServiceInstanceItem
            member={member}
            key={member}
            serviceInstanceValidationErrors={serviceInstanceValidationErrors}

            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </Table>
    <Select
      options={serviceOptions}
      value={serviceValue}
      onChange={onSetService}
    />
    <Button
      onClick={onAdd}
      disabled={!serviceValue}
    >Add Service Instance</Button>
  </FormGroup>
)

export default enhance(ServiceInstanceArray);
