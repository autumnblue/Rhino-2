import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import { loadSingleTool, deleteToolTrigger, editToolFormChange } from 'src/redux/tools/actions';

// selectors
import { getCurrentTool } from 'src/redux/tools/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch }, params: { toolId } }) => dispatch(loadSingleTool(toolId)),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.tools.validationErrors,
  tool: getCurrentTool(state),
}), {
  onDelete: deleteToolTrigger,
  onFieldChange: editToolFormChange,
});

const propsEnhancer = withPropsOnChange(['tool'], ({ tool }) => ({
  breadcrumbs: [{
    label: 'Tools',
    url: '/tools',
  }, {
    label: tool.name,
  }],
  // initialValues used by reduxForm
  initialValues: tool,
}));

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'editToolForm',
});

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete, tool }) => () => onDelete(tool.id),
  onFieldChange: ({ onFieldChange, tool }) => () => onFieldChange(tool.id),
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  propsEnhancer,
  reduxFormEnhancer,
  handlersEnhancer,
  pure,
);
