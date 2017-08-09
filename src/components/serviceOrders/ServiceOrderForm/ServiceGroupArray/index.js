import { FormGroup  }from 'reactstrap';
import { compose, pure, withHandlers } from 'recompose';

import { Button } from 'src/components'

import ServiceGroupItem from '../ServiceGroupItem';

const handlersEnhancer = withHandlers({
  onAdd: ({ onAdd, fields }) => async () => {
    const addAction = await onAdd();
    const { data } = addAction.response;

    if(data && data.service_group) {
      fields.push(data.service_group);
    }
  },
  onDelete: ({ onDelete, fields }) => (id, index) => {
    onDelete(id);
    fields.remove(index)
  }
});

const enhance = compose(
  handlersEnhancer,
  pure,
)

const ServiceGroupArray = ({
  fields,
  serviceGroupsValidationErrors,
  serviceInstanceValidationErrors,

  onAdd,
  onEdit,
  onDelete,
}) => (
  <FormGroup tag="fieldset">
    <legend>Recurring Service Groups</legend>
    {fields.map((member, index, fields) => (
      <ServiceGroupItem
        member={member}
        index={index}
        key={member}
        serviceGroupsValidationErrors={serviceGroupsValidationErrors}
        serviceInstanceValidationErrors={serviceInstanceValidationErrors}

        extended

        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))}
    <Button color="primary" onClick={onAdd}>Add Service Group</Button>
  </FormGroup>
)

export default enhance(ServiceGroupArray);
