import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { compose, pure, withPropsOnChange } from 'recompose';

// actions
import { loadServiceOrders, listFiltersChange } from 'src/redux/serviceOrders/actions';

// selectors
import { getServiceOrders } from 'src/redux/serviceOrders/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({
    store: { dispatch },
    location: { query: { contains, sort, page, per_page, status } },
  }) => dispatch(loadServiceOrders({
    page,
    per_page,
    sort: sort ? [sort] : undefined,
    include: ['client'],
    filter: {
      ...(status ? {
        status: {
          eq: status
        }
      } : {}),
      ...(contains ? {
        name: {
          icontains: contains,
        },
      } : {})
    }
  })),
}]);

const reduxConnect = connect(
  state => ({
    serviceOrders: getServiceOrders(state),
    clientsData: state.clients.data,
  }),
  {
    onLoadServiceOrders: loadServiceOrders,
    onFiltersChange: listFiltersChange,
  },
  null,
  { pure: true },
);


const propsEnhancer = withPropsOnChange(['location'], ({
  location: { query: { contains, sort, page, per_page, status } },
}) => ({
  filters: { contains, sort, page: +page, per_page: +per_page, status },
}));

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  propsEnhancer,
  pure,
);
