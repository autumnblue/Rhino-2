import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import { loadClients, loadSingleClient, deleteClientTrigger, editClientFormChange } from 'src/redux/clients/actions';
import { loadIssuers } from 'src/redux/issuers/actions';
import { loadUsers } from 'src/redux/users/actions';

// selectors
import { getIssuers } from 'src/redux/issuers/selectors';
import { getPotentialParents, getCurrentClient } from 'src/redux/clients/selectors';
import { getUsers } from 'src/redux/users/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch }, params: { clientId } }) => Promise.all([
    dispatch(loadClients()),
    dispatch(loadIssuers()),
    dispatch(loadUsers()),
    dispatch(loadSingleClient(clientId)),
  ]),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.clients.validationErrors,
  parents: getPotentialParents(state),
  issuers: getIssuers(state),
  users: getUsers(state),
  client: getCurrentClient(state),
}), {
  onDelete: deleteClientTrigger,
  onBlur: editClientFormChange,
});

const propsEnhancer = withPropsOnChange(['client'], ({ client }) => ({
  breadcrumbs: [{
    label: 'Clients',
    url: '/clients',
  }, {
    label: client.name,
  }],
  // initialValues used by reduxForm
  initialValues: client,
}));

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'editClientForm',
});

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete, client }) => () => onDelete(client.id),
  onBlur: ({ onBlur, client }) => () => onBlur(client.id),
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  propsEnhancer,
  reduxFormEnhancer,
  handlersEnhancer,
  pure,
);
