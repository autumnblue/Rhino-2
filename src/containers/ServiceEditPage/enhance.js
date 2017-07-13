import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// // actions
// import { loadClients, loadSingleClient, deleteClientTrigger, editClientFormChange } from 'src/redux/clients/actions';
// import { loadIssuers } from 'src/redux/issuers/actions';
// import { loadUsers } from 'src/redux/users/actions';
import { loadService, deleteServiceTrigger, editServiceFormChange } from 'src/redux/services/actions';

// // selectors
// import { getIssuers } from 'src/redux/issuers/selectors';
// import { getClients, getCurrentClient } from 'src/redux/clients/selectors';
// import { getUsers } from 'src/redux/users/selectors';
import { getService } from 'src/redux/services/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch }, params: { serviceId } }) => Promise.all([
    dispatch(loadService(serviceId)),
  ]),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.services.validationErrors,
  service: getService(state),
}), {
  onDelete: deleteServiceTrigger,
  onFieldChange: editServiceFormChange,
});

const propsEnhancer = withPropsOnChange(['service'], ({ service }) => ({
  breadcrumbs: [{
    label: 'Services',
    url: '/services',
  }, {
    label: service.name,
  }],
  // initialValues used by reduxForm
  initialValues: service,
}));

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'editServiceForm',
});

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete, service }) => () => onDelete(service.id),
  onFieldChange: ({ onFieldChange, service }) => () => onFieldChange(service.id),
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  propsEnhancer,
  reduxFormEnhancer,
  handlersEnhancer,
  pure,
);
