import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { reduxForm } from 'redux-form';

// actions
import { newServiceFormChange, loadServiceChoices } from 'src/redux/services/actions';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadServiceChoices()),
}]);

const reduxConnect = connect(state => ({
  choices: state.services.choices,
  validationErrors: state.services.validationErrors,
}), {
  onFieldChange: newServiceFormChange,
});

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'newServiceForm',
  initialValues: {
    default_sort_priority: 0,
  },
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  reduxFormEnhancer,
  pure,
);
