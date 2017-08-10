import { Field, FieldArray } from 'redux-form';
import { FormGroup } from 'reactstrap';
import { compose, onlyUpdateForKeys, withState, withHandlers, withPropsOnChange } from 'recompose'

import { ReduxInput, ReduxHidden, Button, ReduxRichTextList } from 'src/components';
import { empty } from 'src/helpers';

import ServiceInstanceArray from './ServiceInstanceArray'

const idEnhancer = withState('id', 'onSetId');

const handlersEnhancer = withHandlers({
  onEdit: ({ onEdit, id, member }) => () =>  onEdit(id, member),
  onDelete: ({ onDelete, id, index }) => () => onDelete(id, index),
  onAddServiceInstance: ({ onAddServiceInstance, id }) => (data) => onAddServiceInstance({
    ...data,
    service_group: id,
    commit: true,
  })
});

const propsEnhancer = withPropsOnChange(['serviceGroupsValidationErrors', 'id'], ({ serviceGroupsValidationErrors, id }) => ({
  validationErrors: serviceGroupsValidationErrors[id] || empty,
}))

const enhance = compose(
  idEnhancer,
  handlersEnhancer,
  propsEnhancer,
  onlyUpdateForKeys([
    'validationErrors',
    'serviceInstanceValidationErrors',
    'serviceOptions'
  ]),
)

const ServiceGroupItem = ({
  member,
  extended,
  validationErrors,
  serviceInstanceValidationErrors,
  className,
  serviceOptions,

  onSetId,
  onEdit,
  onDelete,

  onEditServiceInstance,
  onAddServiceInstance,
  onDeleteServiceInstance,
}) => (
  <FormGroup className={className}>
    <Field
      component={ReduxHidden}
      onFill={onSetId}
      name={`${member}.id`}
    />
    <Field
      component={ReduxRichTextList}
      name={`${member}.incentives`}
      onChange={onEdit}
      error={validationErrors.incentives}
    />
    <FieldArray
      name={`${member}.service_instances`}
      component={ServiceInstanceArray}
      serviceInstanceValidationErrors={serviceInstanceValidationErrors}
      serviceOptions={serviceOptions}

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
