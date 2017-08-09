import { compose, pure, withHandlers } from 'recompose'
import { Field } from 'redux-form';
import { FormGroup } from 'reactstrap';

import { ReduxInput, Button, FieldError } from 'src/components'

const handlersEnhancer = withHandlers({
  onAdd: ({ onEditServiceGroup, fields }) => (evt) => {
    evt.preventDefault();
    fields.push('');
    onEditServiceGroup();
  },
  onFieldChange: ({ onEditServiceGroup }) => onEditServiceGroup
})

const enhance = compose(
  handlersEnhancer,
  pure,
)

const Incentives = ({
  fields,
  error,

  onAdd,
  onFieldChange,
}) => (
  <FormGroup>
    <label>Incentives</label>
    <div>
    {fields.map((member, i) => (
      <FormGroup key={i}>
        <Field
          component={ReduxInput}
          name={member}
          onBlur={onFieldChange}
        />
      </FormGroup>
    ))}
    </div>
    <FieldError error={error} />
    <Button color="primary" onClick={onAdd}>Add Incentive</Button>
  </FormGroup>
)

export default enhance(Incentives)
