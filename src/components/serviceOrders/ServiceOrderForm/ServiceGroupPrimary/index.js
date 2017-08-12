import { FormGroup } from 'reactstrap';

import ServiceGroupItem from '../ServiceGroupItem';
import css from './style.css';

const ServiceGroupPrimary = ({
  serviceOptions,
  serviceGroupsValidationErrors,
  serviceInstanceValidationErrors,
  adjustmentValidationErrors,

  onEditServiceGroup,

  onEditServiceInstance,
  onAddServiceInstance,
  onDeleteServiceInstance,

  onEditAdjustment,
  onAddAdjustment,
  onDeleteAdjustment,
}) => (
  <FormGroup tag="fieldset">

    <legend>Primary Service Group</legend>
    <div className={css.container}>
      <ServiceGroupItem
        member="primary_service_group"
        {...{
          serviceOptions,
          serviceGroupsValidationErrors,
          serviceInstanceValidationErrors,
          adjustmentValidationErrors,

          onEdit: onEditServiceGroup,

          onEditServiceInstance,
          onAddServiceInstance,
          onDeleteServiceInstance,

          onEditAdjustment,
          onAddAdjustment,
          onDeleteAdjustment,
        }}

      />
    </div>
  </FormGroup>
)

export default ServiceGroupPrimary;
