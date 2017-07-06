import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';

// actions
import { loadTools } from 'src/redux/tools/actions';

// selectors
import { getTools } from 'src/redux/tools/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadTools()),
}]);

const reduxConnect = connect(
  state => ({
    tools: getTools(state),
  }),
  null,
);

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  pure,
);
