import { Field, FieldArray } from 'redux-form';
import { FormGroup, Col, Row } from 'reactstrap';
import { compose, onlyUpdateForKeys, withState, withHandlers, withPropsOnChange } from 'recompose'

import { ReduxInput, ReduxHidden, Button, ReduxRichTextList } from 'src/components';
import { empty, withReduxFormValues } from 'src/helpers';

import ServiceInstanceArray from './ServiceInstanceArray'
import AdjustmentsArray from './AdjustmentsArray'

const idEnhancer = withState('id', 'onSetId');

const handlersEnhancer = withHandlers({
  onEdit: ({ onEdit, id, member }) => () => setTimeout(onEdit, 0, id, member),
  onDelete: ({ onDelete, id, index }) => () => onDelete(id, index),
  onAddServiceInstance: ({ onAddServiceInstance, id }) => (data) => onAddServiceInstance({
    ...data,
    service_group: id,
  }),
  onAddAdjustment: ({ onAddAdjustment, id }) => (data) => onAddAdjustment({
    ...data,
    service_group: id,
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
    'adjustmentValidationErrors',
    'serviceOptions'
  ]),
)

const ServiceGroupItem = ({
  member,
  extended,
  validationErrors,
  serviceInstanceValidationErrors,
  adjustmentValidationErrors,
  className,
  serviceOptions,

  onSetId,

  onEdit,
  onDelete,

  onEditServiceInstance,
  onAddServiceInstance,
  onDeleteServiceInstance,

  onEditAdjustment,
  onAddAdjustment,
  onDeleteAdjustment,
}) => (
  <FormGroup className={className}>
    <Field name={`${member}.id`} component={ReduxHidden} onFill={onSetId} />

    <Row>
      <Col md="6" />
      <Col md="6">
        <FormGroup>
          <label>Incentives</label>
          <Field
            component={ReduxRichTextList}
            name={`${member}.incentives`}
            onChange={onEdit}
            error={validationErrors.incentives}
          />
        </FormGroup>
      </Col>
    </Row>
    <FieldArray
      name={`${member}.service_instances`}
      component={ServiceInstanceArray}
      serviceInstanceValidationErrors={serviceInstanceValidationErrors}
      serviceOptions={serviceOptions}

      onEdit={onEditServiceInstance}
      onAdd={onAddServiceInstance}
      onDelete={onDeleteServiceInstance}
    />

    <FieldArray
      name={`${member}.adjustments`}
      component={AdjustmentsArray}
      adjustmentValidationErrors={adjustmentValidationErrors}

      onEdit={onEditAdjustment}
      onAdd={onAddAdjustment}
      onDelete={onDeleteAdjustment}
    />
    <Base
      component={Button}
      exists={extended}
      onClick={onDelete}
    >Delete</Base>
  </FormGroup>
)


export default enhance(ServiceGroupItem);
