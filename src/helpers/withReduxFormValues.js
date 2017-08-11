import { formValues } from 'redux-form'

const withReduxFormValues = (mapper) => (Component) => {
  return (props) => {
    const WithReduxFormValues = formValues(mapper(props))(Component);
    WithReduxFormValues.displayName = `withReduxFormValues(${Component.displayName || Component.name}`;
    return <WithReduxFormValues {...props} />
  };
}

export default withReduxFormValues;
