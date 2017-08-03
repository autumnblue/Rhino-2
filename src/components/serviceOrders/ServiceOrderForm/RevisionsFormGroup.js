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

const TeamFormGroup = ({
  usersOptions,
  validationErrors,

  onFieldChange,
}) => (
  <FormGroup tag="fieldset">
    <legend>Revisions</legend>
    TODO
  </FormGroup>
);

TeamFormGroup.propTypes = propTypes;

export default enhance(TeamFormGroup);
