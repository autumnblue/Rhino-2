import { asyncConnect } from 'redux-connect';
import { compose, pure, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import { loadClients, listFiltersChange, pageChange } from 'src/redux/clients/actions';
import { getClients } from 'src/redux/clients/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch }, location: { query } }) => {
    const { contains, per_page, sort, page } = query;

    return dispatch(loadClients({
      page,
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
    page: store.clients.page,
    pageCount: store.clients.pageCount,
  }),
  {
    onFiltersChange: listFiltersChange,
    onPageChange: pageChange,
  },
  null,
  { pure: true },
);

const propsEnhancer = withPropsOnChange(['location'], ({ location }) => ({
  filters: pick(location.query, ['contains', 'per_page', 'sort']),
}));

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  propsEnhancer,
  pure,
);
