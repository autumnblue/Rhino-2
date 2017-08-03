import { compose, pure, withPropsOnChange } from 'recompose';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func } from 'prop-types';

import { ReduxSelect, ReduxAssociations } from 'src/components';

const propTypes = {
  validationErrors: object,

  onFieldChange: func.isRequired,
};

const enhance =  pure

const IndustriesFormGroup = ({
  industriesOptions,
  validationErrors,

  onFieldChange,
}) => (
  <FormGroup tag="fieldset">
    <legend>Associated Industries</legend>
      <Field
        component={ReduxAssociations}
        name="industries"
        options={industriesOptions}
        onChange={onFieldChange}
        error={validationErrors.industries}
        disabled
      />
  </FormGroup>
);

IndustriesFormGroup.propTypes = propTypes;

export default enhance(IndustriesFormGroup);
