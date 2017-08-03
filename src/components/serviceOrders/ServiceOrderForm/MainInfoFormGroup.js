import { FormGroup } from 'reactstrap';
import { pure } from 'recompose';
import { Field } from 'redux-form';

import { ReduxSelect, ReduxInput } from 'src/components'

import ReduxCustomizableText from './ReduxCustomizableText';

const enhance = pure;

const MainInfoFormGroup = ({
  clientOptions,
  statusOptions,
  paymentOptions,
  breadcrumbs,
  validationErrors,

  onFieldChange,
}) => (
  <FormGroup tag="fieldset">
  <FormGroup>
    <label>Client</label>
    <Field
      component={ReduxSelect}
      name="client"
      options={clientOptions}
      onChange={onFieldChange}
      error={validationErrors.client}
      disabled
    />
  </FormGroup>
  <FormGroup>
    <label>Custom Title</label>
    <Field
      component={ReduxCustomizableText}
      name="custom_title"
      onChange={onFieldChange}
      error={validationErrors.custom_title}
      format={null}
    />
  </FormGroup>
  <FormGroup>
    <label>Status</label>
    <Field
      component={ReduxSelect}
      name="status"
      options={statusOptions}
      onChange={onFieldChange}
      error={validationErrors.status}
    />
  </FormGroup>
  <FormGroup>
    <label>Payment Status</label>
    <Field
      component={ReduxSelect}
      name="payment"
      options={paymentOptions}
      onChange={onFieldChange}
      error={validationErrors.payment}
    />
  </FormGroup>
  <FormGroup>
    <label>Notes</label>
    <Field
      component={ReduxInput}
      name="notes"
      type="textarea"
      onBlur={onFieldChange}
      error={validationErrors.notes}
    />
  </FormGroup>
  </FormGroup>
)


export default enhance(MainInfoFormGroup);
