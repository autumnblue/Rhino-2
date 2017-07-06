import Select from 'react-select';
import { compose, pure, withHandlers } from 'recompose';
import { shape, string, oneOf, number } from 'prop-types';

import css from './style.css';

const propTypes = {
  input: shape({
    value: oneOf([string, number]).isRequired,
  }).isRequired,
  error: string,
};

const handlersEnhancer = withHandlers({
  onChange: ({ input: { onChange } }) => v => onChange(v ? v.value : null),
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

ReduxSelect.propTypes = propTypes;

export default enhance(ReduxSelect);
