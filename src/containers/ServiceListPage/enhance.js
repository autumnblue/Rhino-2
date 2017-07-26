import { asyncConnect } from 'redux-connect';
import { compose, pure, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { loadServices, editService } from 'src/redux/services/actions';
import { getServices } from 'src/redux/services/selectors';
import { getAssetsData } from 'src/redux/assets/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadServices()),
}]);

const reduxConnect = connect(
  store => ({
    services: getServices(store),
    assetsData: getAssetsData(store),
  }),
  {
    onEdit: editService,
    onLoadServices: loadServices,
  },
);

const handlersEnhancer = withHandlers({
  onEdit: ({ onEdit, onLoadServices }) => async (...args) => {
    await onEdit(...args);
    onLoadServices();
  },
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  handlersEnhancer,
  pure,
);
