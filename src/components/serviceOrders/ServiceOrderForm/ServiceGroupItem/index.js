import { Field, FieldArray } from 'redux-form';
import { FormGroup } from 'reactstrap';
import { compose, onlyUpdateForKeys, withState, withHandlers, withPropsOnChange } from 'recompose'

import { ReduxInput, ReduxHidden, Button } from 'src/components';

import Incentives from './Incentives';
import ServiceInstanceArray from './ServiceInstanceArray'

const idEnhancer = withState('id', 'onSetId');

const handlersEnhancer = withHandlers({
  onEdit: ({ onEdit, id, member }) => () =>  onEdit(id, member),
  onDelete: ({ onDelete, id, index }) => () => onDelete(id, index)
});

const empty = {};

const propsEnhancer = withPropsOnChange(['serviceGroupsValidationErrors', 'id'], ({ serviceGroupsValidationErrors, id }) => ({
  validationErrors: serviceGroupsValidationErrors[id] || empty,
}))

const enhance = compose(
  idEnhancer,
  handlersEnhancer,
  propsEnhancer,
  onlyUpdateForKeys(['validationErrors']),
)

const ServiceGroupItem = ({
  member,
  extended,
  validationErrors,
  serviceInstanceValidationErrors,

  onSetId,
  onEdit,
  onDelete,

  onEditServiceInstance,
  onAddServiceInstance,
  onDeleteServiceInstance,
}) => (
  <FormGroup>
    <Field component={ReduxHidden} onFill={onSetId} name={`${member}.id`} />
    <FieldArray
      name={`${member}.incentives`}
      component={Incentives}
      onEditServiceGroup={onEdit}
      error={validationErrors.incentives}
    />
    <FieldArray
      name={`${member}.service_instances`}
      component={ServiceInstanceArray}
      serviceInstanceValidationErrors={serviceInstanceValidationErrors}

      onEdit={onEditServiceInstance}
      onAdd={onAddServiceInstance}
      onDelete={onDeleteServiceInstance}
    />
    <Base
      component={Button}
      exists={extended}
      onClick={onDelete}
    >Delete</Base>
  </FormGroup>
)


export default enhance(ServiceGroupItem);
