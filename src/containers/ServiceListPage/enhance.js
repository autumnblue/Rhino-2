import { asyncConnect } from 'redux-connect';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';

import { loadServices, editService } from 'src/redux/services/actions';
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
    onEdit: editService,
  },
);

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  pure,
);
