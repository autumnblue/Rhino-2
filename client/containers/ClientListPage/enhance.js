import { asyncConnect } from 'redux-connect';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';

import { loadClients } from 'client/redux/clients/actions';
import { getClients } from 'client/redux/clients/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadClients()),
}]);

const reduxConnect = connect(
  store => ({
    clients: getClients(store),
  }),
);

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  pure,
);
