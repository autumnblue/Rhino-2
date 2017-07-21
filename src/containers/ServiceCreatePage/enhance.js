import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import { newServiceFormChange } from 'src/redux/services/actions';


const reduxConnect = connect(state => ({
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
  reduxConnect,
  reduxFormEnhancer,
  pure,
);
