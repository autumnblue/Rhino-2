import { compose, pure, withPropsOnChange } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// TODO: Can we move validate somewhere else?
import { validate } from 'src/components/clients/ClientForm';

// actions
import { loadClients, loadSingleClient, newClientFormChange } from 'src/redux/clients/actions';
import { loadIssuers } from 'src/redux/issuers/actions';
import { loadUsers } from 'src/redux/users/actions';

// selectors
import { getIssuers } from 'src/redux/issuers/selectors';
import { getPotentialParents, getCurrentClient } from 'src/redux/clients/selectors';
import { getUsers } from 'src/redux/users/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch } }) => Promise.all([
    dispatch(loadClients()),
    dispatch(loadIssuers()),
    dispatch(loadUsers()),
  ]),
}]);

const reduxConnect = connect(state => ({
  parents: getPotentialParents(state),
  issuers: getIssuers(state),
  users: getUsers(state),
}), {
  onBlur: newClientFormChange,
});

const reduxFormEnhancer = reduxForm({
  validate,
  pure: true,
  form: 'newClientForm',
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  reduxFormEnhancer,
  pure,
);
