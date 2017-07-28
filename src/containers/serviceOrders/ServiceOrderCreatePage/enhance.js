import { compose, pure } from 'recompose';
import { reduxForm } from 'redux-form';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';

// actions
import { newServiceOrderFormChange } from 'src/redux/serviceOrders/actions';

const reduxAsyncConnect = asyncConnect([{
  promise: () => Promise.resolve(),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.serviceOrders.validationErrors,
}), {
  onFieldChange: newServiceOrderFormChange,
});

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'newServiceOrderForm',
  initialValues: {},
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  reduxFormEnhancer,
  pure,
);
