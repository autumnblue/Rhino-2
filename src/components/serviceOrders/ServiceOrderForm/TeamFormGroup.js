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
    <legend>Team</legend>
    <FormGroup>
      <label>Author</label>
      <Field
        component={ReduxSelect}
        name="author"
        options={usersOptions}
        onChange={onFieldChange}
        error={validationErrors.author}
      />
    </FormGroup>
    <FormGroup>
      <label>Project Manager</label>
      <Field
        component={ReduxSelect}
        name="project_manager"
        options={usersOptions}
        onChange={onFieldChange}
        error={validationErrors.project_manager}
      />
    </FormGroup>
    <FormGroup>
      <label>Team Members</label>
      <Field
        component={ReduxAssociations}
        name="team"
        options={usersOptions}
        onChange={onFieldChange}
        error={validationErrors.team}
      />
    </FormGroup>
  </FormGroup>
);

TeamFormGroup.propTypes = propTypes;

export default enhance(TeamFormGroup);
