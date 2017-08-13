import { FormGroup } from 'reactstrap';
import { compose, pure, withHandlers } from 'recompose';

import { Button } from 'src/components';

import ServiceGroupItem from '../ServiceGroupItem';
import css from './style.css';

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete }) => id => onDelete(id),
});

const enhance = compose(
  handlersEnhancer,
  pure,
);

const ServiceGroupArray = ({
  fields,
  summaryOfCosts,
  serviceOptions,
  frequencyOptions,
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
    <Base exists={fields.length} className={css.items}>
      {fields.map((member, index, fields) => (
        <ServiceGroupItem
          className={css.item}
          member={member}
          index={index}
          key={member}
          extended
          {...{
            summaryOfCosts,
            serviceOptions,
            frequencyOptions,
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
    </Base>
    <Button color="primary" onClick={onAdd}>Add Service Group</Button>
  </FormGroup>
);

export default enhance(ServiceGroupArray);
