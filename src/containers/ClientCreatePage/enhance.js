import { compose, pure } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import { loadClients, newClientFormChange } from 'src/redux/clients/actions';
import { loadIssuers } from 'src/redux/issuers/actions';
import { loadUsers } from 'src/redux/users/actions';

// selectors
import { getIssuers } from 'src/redux/issuers/selectors';
import { getClients } from 'src/redux/clients/selectors';
import { getUsers } from 'src/redux/users/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch } }) => Promise.all([
    dispatch(loadClients({
      filter: {
        // include clients which has no umbrella
        umbrella: { isnull: true },
      },
    })),
    dispatch(loadIssuers()),
    dispatch(loadUsers()),
  ]),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.clients.validationErrors,
  parents: getClients(state),
  issuers: getIssuers(state),
  users: getUsers(state),
}), {
  onFieldChange: newClientFormChange,
});

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'newClientForm',
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  reduxFormEnhancer,
  pure,
);
