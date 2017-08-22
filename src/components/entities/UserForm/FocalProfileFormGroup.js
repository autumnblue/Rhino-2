import { FormGroup } from 'reactstrap';

const FocalProfileFormGroup = () => (
  <FormGroup tag="fieldset">
    <legend>Focal</legend>
    <FormGroup>
      <label>Associated Client</label>
      <Field
        component={ReduxSelect}
        name="profile.client"
        onChange={onFieldChange}
        options={[]}
        error={validationErrors.name}
      />
    </FormGroup>
  </FormGroup>
)

export default FocalProfileFormGroup
