import { compose, pure, withPropsOnChange } from 'recompose';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func, string } from 'prop-types';
import moment from 'moment';

import { ReduxInput, ReduxSelect } from 'src/components';
import { selectOptionsType } from 'src/prop-types';

const propTypes = {
  issuersOptions: selectOptionsType.isRequired,
  projectManagerOptions: selectOptionsType.isRequired,
  validationErrors: object,
  created: string.isRequired,

  onFieldChange: func.isRequired,
};

const propsEnhancer = withPropsOnChange(['created'], ({ created }) => ({
  created: created ? moment(created).format('l') : '-',
}));

const enhance = compose(
  propsEnhancer,
  pure,
);

const ManagementFormGroup = ({
  issuersOptions,
  projectManagerOptions,
  validationErrors,
  created,

  onFieldChange,
}) => (
  <FormGroup tag="fieldset">
    <legend>Management</legend>
    <span>Created {created}</span>
    <FormGroup>
      <label>Issuer</label>
      <Field
        component={ReduxSelect}
        name="issuer"
        options={issuersOptions}
        placeholder="Issuer"
        onChange={onFieldChange}
        error={validationErrors.issuer}
      />
    </FormGroup>

    <FormGroup>
      <label>Project Manager</label>
      <Field
        component={ReduxSelect}
        name="project_manager"
        options={projectManagerOptions}
        placeholder="Project Manager"
        onChange={onFieldChange}
        error={validationErrors.project_manager}
      />
    </FormGroup>

    <FormGroup>
      <Label>Notes</Label>
      <Field
        component={ReduxInput}
        name="notes"
        type="textarea"
        placeholder="Notes"
        onBlur={onFieldChange}
        error={validationErrors.notes}
      />
    </FormGroup>
  </FormGroup>
);

ManagementFormGroup.propTypes = propTypes;

export default enhance(ManagementFormGroup);
