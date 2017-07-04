import { asyncConnect } from 'redux-connect';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import { loadClients, listFiltersChange } from 'src/redux/clients/actions';
import { getClients } from 'src/redux/clients/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch }, location: { query } }) => {
    const { contains, per_page, sort } = query;
    return dispatch(loadClients({
      per_page,
      sort: sort ? [sort] : undefined,
      filter: contains ? {
        name: {
          icontains: contains,
        },
      } : {},
    }));
  },
}]);

const reduxConnect = connect(
  store => ({
    clients: getClients(store),
  }),
  {
    onFiltersChange: listFiltersChange,
  },
  (stateProps, dispatchProps, { location: { query } }) => ({
    ...stateProps,
    ...dispatchProps,
    filters: pick(query, ['contains', 'per_page', 'sort']),
  }),
);

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  pure,
);
