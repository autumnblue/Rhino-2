import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';

const selectsOptionsEnhancer = withPropsOnChange([
  'parents',
  'issuers',
  'users',
], ({ parents, issuers, users }) => ({
  parentsOptions: parents.map(({ id, name }) => ({
    value: id,
    label: name,
  })),
  issuersOptions: issuers.map(({ id, name }) => ({
    value: id,
    label: name,
  })),
  projectManagerOptions: users.map(({ id, first_name, last_name }) => ({
    value: id,
    label: first_name && last_name ?
      `${first_name} ${last_name}` :
      <em>Empty name</em>,
  })),
}));

// this little trick allows to call onFieldChange after redux-form updates the store
const handlersEnhancer = withHandlers({
  onFieldChange: ({ onFieldChange }) => () => setTimeout(() => onFieldChange())
})

export default compose(
  selectsOptionsEnhancer,
  handlersEnhancer,
  pure,
);
