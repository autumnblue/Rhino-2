import { compose, pure } from 'recompose';
import { reduxForm } from 'redux-form';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';

// actions
import { newToolFormChange } from 'src/redux/tools/actions';

const reduxAsyncConnect = asyncConnect([{
  promise: () => Promise.resolve(),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.tools.validationErrors,
}), {
  onFieldChange: newToolFormChange,
});

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'newToolForm',
  initialValues: {
    associated_findings: [],
    services: [],
    default_sort_priority: 0,
  },
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  reduxFormEnhancer,
  pure,
);
