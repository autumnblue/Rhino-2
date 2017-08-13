import { Field, FieldArray } from 'redux-form';
import { FormGroup, Col, Row } from 'reactstrap';
import { compose, onlyUpdateForKeys, withState, withHandlers, withPropsOnChange } from 'recompose';

import { ReduxInput, ReduxHidden, Button, ReduxRichTextList, ReduxPriorityVote, ReduxOutputText, ReduxSelect } from 'src/components';
import { empty, withReduxFormValues, formatMoney } from 'src/helpers';

import ServiceInstanceArray from './ServiceInstanceArray';
import AdjustmentsArray from './AdjustmentsArray';

const idEnhancer = withState('id', 'onSetId');

const handlersEnhancer = withHandlers({
  onEdit: ({ onEdit, id, member }) => () => setTimeout(onEdit, 0, id, member),
  onDelete: ({ onDelete, id, index }) => () => onDelete(id, index),
  onAddServiceInstance: ({ onAddServiceInstance, id }) => data => onAddServiceInstance({
    ...data,
    service_group: id,
  }),
  onAddAdjustment: ({ onAddAdjustment, id }) => data => onAddAdjustment({
    ...data,
    service_group: id,
  }),
});

const propsEnhancer = withPropsOnChange(
  ['serviceGroupsValidationErrors', 'id', 'summaryOfCosts'],
  ({ serviceGroupsValidationErrors, id, summaryOfCosts }) => ({
    validationErrors: serviceGroupsValidationErrors[id] || empty,
    displayTotal: id && formatMoney(summaryOfCosts.costsByGroupId[id].total),
    displaySubtotal: id && formatMoney(summaryOfCosts.costsByGroupId[id].subtotal),
  }));

const enhance = compose(
  idEnhancer,
  handlersEnhancer,
  propsEnhancer,
  onlyUpdateForKeys([
    'validationErrors',
    'serviceInstanceValidationErrors',
    'adjustmentValidationErrors',
    'serviceOptions',
    'displayTotal',
    'displaySubtotal',
  ]),
);

const ServiceGroupItem = ({
  member,
  extended,
  displayTotal,
  displaySubtotal,
  summaryOfCosts,
  validationErrors,
  serviceInstanceValidationErrors,
  adjustmentValidationErrors,
  className,
  serviceOptions,
  frequencyOptions,

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
      <Col md="1">
        <Base exists={extended}>
          <Field
            component={ReduxPriorityVote}
            name={`${member}.sort_priority`}
            onChange={onEdit}
            error={validationErrors.sort_priority}
          />
        </Base>
      </Col>
      <Col md="7">
        <Base exists={extended} component={Row}>
          <Col md="12">
            <h5>
            Recurring Service Group
            #<Field name={`${member}.id`} component={ReduxOutputText} />
            </h5>
          </Col>
          <Col md="6" lg="6" xl="3">
            <FormGroup>
              <label>Frequency</label>
              <Field name={`${member}.frequency`} component={ReduxSelect} options={frequencyOptions} />
            </FormGroup>
          </Col>
          <Col md="6" lg="6" xl="3">
            <FormGroup>
              <label>Iterations</label>
              <Field
                component={ReduxInput}
                name={`${member}.iterations`}
                type="number"
                addonPost="times"
                error={validationErrors.iterations}
                parse={parseInt}

                onBlur={onEdit}
              />
            </FormGroup>
          </Col>
          <Col md="12" lg="12" xl="6">
            <FormGroup>
              <label>Simple Service Range</label>
              <Field
                component={ReduxInput}
                name={`${member}.simple_service_range`}
                type="textarea"
                error={validationErrors.simple_service_range}

                onBlur={onEdit}
              />
            </FormGroup>
          </Col>
        </Base>
      </Col>
      <Col md="4">
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
      displaySubtotal={displaySubtotal}
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

    <FormGroup>
      <strong>Total: ${displayTotal}</strong>
    </FormGroup>

    <Base
      component={Button}
      exists={extended}
      onClick={onDelete}
    >Delete Service Group</Base>
  </FormGroup>
);


export default enhance(ServiceGroupItem);
