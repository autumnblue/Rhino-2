import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import { loadSingleUser, deleteUserTrigger, editUserFormChange } from 'src/redux/users/actions';

// selectors
import { getCurrentUser } from 'src/redux/users/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch }, params: { userId } }) => dispatch(loadSingleUser(userId)),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.users.validationErrors,
  user: getCurrentUser(state),
}), {
  onDelete: deleteUserTrigger,
  onFieldChange: editUserFormChange,
});

const propsEnhancer = withPropsOnChange(['user'], ({ user }) => ({
  breadcrumbs: [{
    label: 'Users',
    url: '/users',
  }, {
    label: user.name,
  }],
  // initialValues used by reduxForm
  initialValues: user,
}));

const reduxFormEnhancer = reduxForm({
  pure: true,
  enableReinitialize: true,
  form: 'editUserForm',
});

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete, user }) => () => onDelete(user.id),
  onFieldChange: ({ onFieldChange, user }) => () => onFieldChange(user.id),
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  propsEnhancer,
  reduxFormEnhancer,
  handlersEnhancer,
  pure,
);
