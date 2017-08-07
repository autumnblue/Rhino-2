import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import {
  loadSingleServiceOrder,
  deleteServiceOrderTrigger,
  editServiceOrderFormChange,
  loadServiceOrderChoices,
} from 'src/redux/serviceOrders/actions';
import { loadClients } from 'src/redux/clients/actions';
import { loadUsers } from 'src/redux/users/actions';
import { loadIndustries } from 'src/redux/industries/actions';
import { loadFocalProfiles } from 'src/redux/focalProfiles/actions';

// selectors
import { getCurrentServiceOrder } from 'src/redux/serviceOrders/selectors';
import { getClients } from 'src/redux/clients/selectors';
import { getUsers } from 'src/redux/users/selectors';
import { getIndustries } from 'src/redux/industries/selectors';
import { getFocalProfiles } from 'src/redux/focalProfiles/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: async ({
    store: { dispatch },
    params: { serviceOrderId },
  }) => {
    const [serviceOrderSuccessAction] = await Promise.all([
      dispatch(loadSingleServiceOrder(serviceOrderId)),
      dispatch(loadServiceOrderChoices()),
      dispatch(loadClients({
        filter: {
          'service_orders.id': { eq: serviceOrderId },
        },
      })),
      dispatch(loadUsers()),
      dispatch(loadIndustries()),
    ]);

    const { client } = serviceOrderSuccessAction.response.data.service_order;

    if (client) {
      return dispatch(loadFocalProfiles({
        filter: {
          'client.id': { eq: client.id },
        },
      }));
    }

    return undefined;
  },
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.serviceOrders.validationErrors,
  choices: state.serviceOrders.choices,
  clients: getClients(state),
  users: getUsers(state),
  industries: getIndustries(state),
  serviceOrder: getCurrentServiceOrder(state),
  focalProfiles: getFocalProfiles(state),
  usersData: state.users.data,

}), {
  onDelete: deleteServiceOrderTrigger,
  onFieldChange: editServiceOrderFormChange,
});

const propsEnhancer = withPropsOnChange(['serviceOrder'], ({ serviceOrder }) => ({
  breadcrumbs: [{
    label: 'Service Orders',
    url: '/service-orders',
  }, {
    label: serviceOrder.composite_id,
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
