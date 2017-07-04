import Select from 'react-select';
import { compose, pure, withHandlers } from 'recompose';
import css from './style.css';

const handlersEnhancer = withHandlers({
  onChange: ({ input: { onChange } }) => ({ value } = { value: null }) => onChange(value),
});

const enhance = compose(
  handlersEnhancer,
  pure,
);

const ReduxSelect = ({
  input: { value },
  error,
  ...props
}) => (
  <div>
    <Select
      value={value}
      {...props}
    />
    {error && <span className={css.error}>{error}</span>}
  </div>
);

export default enhance(ReduxSelect);
