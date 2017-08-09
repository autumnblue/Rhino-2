import { FormGroup } from 'reactstrap';
import ServiceGroupItem from '../ServiceGroupItem';

const ServiceGroupPrimary = ({
  serviceGroupsValidationErrors,
  serviceInstanceValidationErrors,

  onEditServiceGroup,
  
  onEditServiceInstance,
  onAddServiceInstance,
  onDeleteServiceInstance,
}) => (
  <FormGroup tag="fieldset">
    <legend>Primary Service Group</legend>
    <ServiceGroupItem
      member="primary_service_group"
      serviceGroupsValidationErrors={serviceGroupsValidationErrors}
      serviceInstanceValidationErrors={serviceInstanceValidationErrors}

      onEdit={onEditServiceGroup}

      onEditServiceInstance={onEditServiceInstance}
      onAddServiceInstance={onAddServiceInstance}
      onDeleteServiceInstance={onDeleteServiceInstance}
    />
  </FormGroup>
)

export default ServiceGroupPrimary;
