import { Row, Col, FormGroup } from 'reactstrap'
import { Field } from 'redux-form';
import { compose, pure, withStateHandlers, withHandlers, withPropsOnChange } from 'recompose'

import {
  ReduxPriorityVote,
  ReduxInput,
  ReduxSelect,
  Input,
  Select,
  PriorityVote,
  Button,
  FieldError,
  ReduxHidden,
} from 'src/components';
import { empty } from 'src/helpers'

import css from './style.css'

const stateEnhancer = withStateHandlers(
    {
      id: null,
      sort_priority: null,
      value: 0,
      modifier: '+',
      label: '',
      description: '',
    },
    {
      onSetId: () => id => ({ id }),
      onSetSortPriority: () => sort_priority => ({ sort_priority }),
      onSetValue: () => (value) => ({ value }),
      onSetModifier: () => (modifier) => ({ modifier }),
      onSetLabel: () => (label) => ({ label }),
      onSetDescription: () => (description) => ({ description })
    }
  )

const propsEnhancer = withPropsOnChange(
  ['adjustmentValidationErrors', 'id', 'isEditing'],
  ({ adjustmentValidationErrors, id, isEditing }) => ({
    validationErrors: adjustmentValidationErrors[isEditing ? id : 'new'] || empty
  })
);

const resetHandlerEnhancer = withHandlers({
  onReset: ({ onSetId, onSetSortPriority, onSetValue, onSetModifier, onSetLabel, onSetDescription }) => () => {
    onSetId(null);
    onSetSortPriority(null);
    onSetValue(0);
    onSetModifier('+');
    onSetLabel('');
    onSetDescription('')
  }
})

const handlersEnhancer = withHandlers({
  onAdd: ({ onAdd, onReset, value, modifier, label, description }) => async () => {
    const { response } = await onAdd({
      value: +value,
      modifier,
      label,
      description
    });

    // :(
    if(response.data && response.data.adjustment) {
      onReset();
    }
  },
  onEdit: ({
    onEdit,
    onReset,
    onCancel,
    id,
    sort_priority,
    value,
    modifier,
    label,
    description
  }) => async () => {
    const { response } = await onEdit(id, {
      sort_priority,
      value,
      modifier,
      label,
      description,
    });

    if(response.data && response.data.adjustment) {
      onReset();
      onCancel();
    }
  }
});

const modifierOptions = [{
  value: '+',
  label: 'Add Number'
}, {
  value: '%',
  label: 'Add Percent'
}]

const enhance = compose(
  stateEnhancer,
  propsEnhancer,
  resetHandlerEnhancer,
  handlersEnhancer,
  pure,
)

const AdjustmentFields = ({
  member,
  isEditing,

  sort_priority,
  value,
  modifier,
  label,
  description,
  validationErrors,

  onSetId,
  onSetSortPriority,
  onSetValue,
  onSetModifier,
  onSetLabel,
  onSetDescription,

  onEdit,
  onAdd,
  onCancel,
}) => (
  <Row className={css.wrapper}>
    {
      isEditing ? (
        <span>
          <Field component={ReduxHidden} name={`${member}.id`} onFill={onSetId} />
          <Field component={ReduxHidden} name={`${member}.value`} onFill={onSetValue} />
          <Field component={ReduxHidden} name={`${member}.sort_priority`} onFill={onSetSortPriority} />
          <Field component={ReduxHidden} name={`${member}.modifier`} onFill={onSetModifier} />
          <Field component={ReduxHidden} name={`${member}.label`} onFill={onSetLabel} />
          <Field component={ReduxHidden} name={`${member}.description`} onFill={onSetDescription} />
        </span>
      ) :
      null
    }
    <Col md="1" sm="1">
      <PriorityVote
        onChange={onSetSortPriority}
        value={sort_priority}
        disabled={sort_priority === null}
      />
    </Col>
    <Col md="11" sm="11">
      <Row>
      <Col md="3" sm="3">
      <FormGroup>
        <label>Value</label>
            <Input
              value={value}
              onChange={onSetValue}
              passValue
            />
          <FieldError error={validationErrors.value} />
        </FormGroup>
      </Col>
      <Col md="3" sm="3">
      <FormGroup>
      <label>Modifier</label>

        <Select
          value={modifier}
          onChange={onSetModifier}
          options={modifierOptions}
          searchable={false}
          clearable={false}
        />
        <FieldError error={validationErrors.modifier} />
        </FormGroup>
      </Col>
      <Col md="6" sm="6">
        <FormGroup>
        <label>Label</label>
        <Input value={label} onChange={onSetLabel} passValue  />
        <FieldError error={validationErrors.label} />
        </FormGroup>
      </Col>
      <Col md="12" sm="12">
        <FormGroup>
        <label>Description</label>

        <Input value={description} onChange={onSetDescription} passValue />
        <FieldError error={validationErrors.description} />
        </FormGroup>
      </Col>
      </Row>
    </Col>
    <Col md="12">
      <Base exists={!isEditing} component={Button} onClick={onAdd}>Add</Base>
      <Base exists={isEditing} component={Button} onClick={onEdit}>Save</Base>{' '}
      <Base exists={isEditing} component={Button} onClick={onCancel}>Cancel</Base>
    </Col>
  </Row>
)

export default enhance(AdjustmentFields);
