import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { compose, pure, withHandlers } from 'recompose';

// actions
import { loadTools, editTool } from 'src/redux/tools/actions';

// selectors
import { getTools } from 'src/redux/tools/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadTools()),
}]);

const reduxConnect = connect(
  state => ({
    tools: getTools(state),
  }),
  {
    onEdit: editTool,
    onLoadTools: loadTools,
  },
  null,
  { pure: true },
);

const handlersEnhancer = withHandlers({
  onEdit: ({ onEdit, onLoadTools }) => async (...args) => {
    await onEdit(...args);
    onLoadTools();
  },
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  handlersEnhancer,
  pure,
);
