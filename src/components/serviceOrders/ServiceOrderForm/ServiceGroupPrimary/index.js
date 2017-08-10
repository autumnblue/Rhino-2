import { FormGroup } from 'reactstrap';

import ServiceGroupItem from '../ServiceGroupItem';
import css from './style.css';

const ServiceGroupPrimary = ({
  serviceOptions,
  serviceGroupsValidationErrors,
  serviceInstanceValidationErrors,

  onEditServiceGroup,

  onEditServiceInstance,
  onAddServiceInstance,
  onDeleteServiceInstance,
}) => (
  <FormGroup tag="fieldset">
    <legend>Primary Service Group</legend>
    <div className={css.container}>
      <ServiceGroupItem
        member="primary_service_group"
        serviceOptions={serviceOptions}
        serviceGroupsValidationErrors={serviceGroupsValidationErrors}
        serviceInstanceValidationErrors={serviceInstanceValidationErrors}

        onEdit={onEditServiceGroup}

        onEditServiceInstance={onEditServiceInstance}
        onAddServiceInstance={onAddServiceInstance}
        onDeleteServiceInstance={onDeleteServiceInstance}
      />
    </div>
  </FormGroup>
)

export default ServiceGroupPrimary;
