import { FormGroup  }from 'reactstrap';
import { compose, pure, withHandlers } from 'recompose';

import { Button } from 'src/components'

import ServiceGroupItem from '../ServiceGroupItem';
import css from './style.css';

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete }) => (id) => onDelete(id)
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
  adjustmentValidationErrors,

  onAdd,
  onEdit,
  onDelete,

  onEditServiceInstance,
  onAddServiceInstance,
  onDeleteServiceInstance,

  onEditAdjustment,
  onAddAdjustment,
  onDeleteAdjustment,
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
        extended={true}
        {...{
          serviceOptions,
          serviceGroupsValidationErrors,
          serviceInstanceValidationErrors,
          adjustmentValidationErrors,

          onDelete,
          onEdit,

          onEditServiceInstance,
          onAddServiceInstance,
          onDeleteServiceInstance,

          onEditAdjustment,
          onAddAdjustment,
          onDeleteAdjustment,
        }}

      />
    ))}
    </div>
    <Button color="primary" onClick={onAdd}>Add Service Group</Button>
  </FormGroup>
)

export default enhance(ServiceGroupArray);
