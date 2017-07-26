import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import { loadSingleServiceOrder, deleteServiceOrderTrigger, editServiceOrderFormChange } from 'src/redux/serviceOrders/actions';

// selectors
import { getCurrentServiceOrder } from 'src/redux/serviceOrders/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch }, params: { serviceOrderId } }) => dispatch(loadSingleServiceOrder(serviceOrderId)),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.serviceOrders.validationErrors,
  serviceOrder: getCurrentServiceOrder(state),
}), {
  onDelete: deleteServiceOrderTrigger,
  onFieldChange: editServiceOrderFormChange,
});

const propsEnhancer = withPropsOnChange(['serviceOrder'], ({ serviceOrder }) => ({
  breadcrumbs: [{
    label: 'Service Orders',
    url: '/service-orders',
  }, {
    label: serviceOrder.name,
  }],
  // initialValues used by reduxForm
  initialValues: serviceOrder,
}));

const reduxFormEnhancer = reduxForm({
  pure: true,
  enableReinitialize: true,
  form: 'editServiceOrderForm',
});

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete, serviceOrder }) => () => onDelete(serviceOrder.id),
  onFieldChange: ({ onFieldChange, serviceOrder }) => () => onFieldChange(serviceOrder.id),
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  propsEnhancer,
  reduxFormEnhancer,
  handlersEnhancer,
  pure,
);
