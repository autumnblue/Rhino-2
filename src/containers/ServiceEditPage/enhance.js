import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { asyncConnect } from 'redux-connect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import { loadService, deleteServiceTrigger, editServiceFormChange } from 'src/redux/services/actions';

// selectors
import { getService } from 'src/redux/services/selectors';
import { getAssets } from 'src/redux/assets/selectors';

const reduxAsyncConnect = asyncConnect([{
  promise: ({ store: { dispatch }, params: { serviceId } }) => Promise.all([
    dispatch(loadService(serviceId)),
  ]),
}]);

const reduxConnect = connect(state => ({
  validationErrors: state.services.validationErrors,
  service: getService(state),
  assets: getAssets(state),
}), {
  onDelete: deleteServiceTrigger,
  onFieldChange: editServiceFormChange,
});

const propsEnhancer = withPropsOnChange(['service'], ({ service }) => ({
  breadcrumbs: [{
    label: 'Services',
    url: '/services',
  }, {
    label: service.name,
  }],
  // initialValues used by reduxForm
  initialValues: service,
}));

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'editServiceForm',
});

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete, service }) => () => onDelete(service.id),
  onFieldChange: ({ onFieldChange, service }) => () => onFieldChange(service.id),
});

export default compose(
  reduxAsyncConnect,
  reduxConnect,
  propsEnhancer,
  reduxFormEnhancer,
  handlersEnhancer,
  pure,
);
