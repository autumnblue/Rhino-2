import Select from 'react-select';
import { compose, pure, withHandlers } from 'recompose';

const handlersEnhancer = withHandlers({
  onChange: ({ input: { onChange } }) => ({ value }) => onChange(value),
});

const enhance = compose(
  handlersEnhancer,
  pure,
);

const ReduxSelect = ({
  input: { value },
  ...props
}) => (
  <Select
    value={value}
    {...props}
  />
);

export default enhance(ReduxSelect);
