import { compose, pure, withHandlers } from 'recompose';
import { string, object, oneOfType, arrayOf } from 'prop-types';

import { FieldError, Select } from 'src/components';

const propTypes = {
  input: object.isRequired,
  error: oneOfType([string, arrayOf(string)]),
};

const handlersEnhancer = withHandlers({
  onChange: ({ input: { onChange } }) => onChange,
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
    <FieldError error={error} />
  </div>
);

ReduxSelect.propTypes = propTypes;

export default enhance(ReduxSelect);
