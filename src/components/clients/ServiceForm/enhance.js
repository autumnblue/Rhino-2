import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';

const selectsOptionsEnhancer = withPropsOnChange([
], ({  }) => ({
}));

// this little trick allows to call onFieldChange after redux-form updates the store
const handlersEnhancer = withHandlers({
  onFieldChange: ({ onFieldChange }) => () => setTimeout(() => onFieldChange()),
});

export default compose(
  selectsOptionsEnhancer,
  handlersEnhancer,
  pure,
);
