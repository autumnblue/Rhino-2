import { asyncConnect } from 'redux-connect';
import { compose, pure, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import { loadServices } from 'src/redux/services/actions';
import { getServices } from 'src/redux/services/selectors';
import { getAssets } from 'src/redux/assets/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadServices()),
}]);

const reduxConnect = connect(
  store => ({
    services: getServices(store),
    assets: getAssets(store),
  }),
  {

  }
);

const propsEnhancer = withPropsOnChange(['location'], ({ location }) => ({
  filters: pick(location.query, ['contains', 'per_page', 'sort']),
}))

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  // propsEnhancer,
  pure,
);
