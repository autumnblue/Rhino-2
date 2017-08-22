import { compose, pure } from 'recompose';
import { reduxForm } from 'redux-form';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';

// actions
import { newUserFormChange } from 'src/redux/users/actions';

const reduxAsyncConnect = asyncConnect([{
  promise: () => Promise.resolve(),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.users.validationErrors,
}), {
  onFieldChange: newUserFormChange,
});

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'newUserForm',
  initialValues: {
    profile: {
      entity_type: 'rhino_profile'
    }
  },
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  reduxFormEnhancer,
  pure,
);
