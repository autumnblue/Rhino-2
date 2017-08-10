import { FormGroup  }from 'reactstrap';
import { compose, pure, withHandlers } from 'recompose';

import { Button } from 'src/components'

import ServiceGroupItem from '../ServiceGroupItem';
import css from './style.css';

const handlersEnhancer = withHandlers({
  onAdd: ({ onAdd, fields }) => async () => {
    const addAction = await onAdd();
    const { data } = addAction.response;

    if(data && data.service_group) {
      //fields.push(data.service_group);
    }
  },
  onDelete: ({ onDelete, fields }) => (id, index) => {
    onDelete(id);
    //console.log(deleteAction)
    //fields.remove(index)
  }
});

const enhance = compose(
  handlersEnhancer,
  pure,
)

const ServiceGroupArray = ({
  fields,
  serviceOptions,
  serviceGroupsValidationErrors,
  serviceInstanceValidationErrors,

  onAdd,
  onEdit,
  onDelete,

  onEditServiceInstance,
  onAddServiceInstance,
  onDeleteServiceInstance,
}) => (
  <FormGroup tag="fieldset">
    <legend>Recurring Service Groups</legend>
    <div className={css.items}>
    {fields.map((member, index, fields) => (
      <ServiceGroupItem
        className={css.item}
        member={member}
        index={index}
        key={member}
        serviceOptions={serviceOptions}
        serviceGroupsValidationErrors={serviceGroupsValidationErrors}
        serviceInstanceValidationErrors={serviceInstanceValidationErrors}

        extended

        onDelete={onDelete}
        onEdit={onEdit}

        onEditServiceInstance={onEditServiceInstance}
        onAddServiceInstance={onAddServiceInstance}
        onDeleteServiceInstance={onDeleteServiceInstance}
      />
    ))}
    </div>
    <Button color="primary" onClick={onAdd}>Add Service Group</Button>
  </FormGroup>
)

export default enhance(ServiceGroupArray);
