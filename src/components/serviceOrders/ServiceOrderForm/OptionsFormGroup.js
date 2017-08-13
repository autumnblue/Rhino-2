import { pure } from 'recompose';
import { FormGroup } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func } from 'prop-types';

import { ReduxCheckbox } from 'src/components';


const propTypes = {
  onFieldChange: func.isRequired,
};

const enhance = pure;

const OptionsFormGroup = ({
  onFieldChange,
}) => (
  <FormGroup tag="fieldset">
    <legend>Options</legend>
    <Field
      component={ReduxCheckbox}
      name="travel_enabled"
      label="Travel Required"
      onChange={onFieldChange}
    />
    <Field
      component={ReduxCheckbox}
      name="Show Appendix C"
      label="app_c_enabled"
      onChange={onFieldChange}
    />
    <Field
      component={ReduxCheckbox}
      name="Include Vulnerability Spreadsheet"
      label="csv_enabled"
      onChange={onFieldChange}
    />
  </FormGroup>
);

OptionsFormGroup.propTypes = propTypes;

export default enhance(OptionsFormGroup);
