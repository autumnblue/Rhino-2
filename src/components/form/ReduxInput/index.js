import { Input } from 'reactstrap';
import { omit } from 'lodash';
import { pure } from 'recompose';
import { string, object, oneOfType, arrayOf } from 'prop-types';

import { FieldError } from 'src/components';

const propTypes = {
  input: object.isRequired,
  error: oneOfType([string, arrayOf(string)]),
  wrapperClassName: string,
};

const enhance = pure;

const ReduxInput = ({
  input: { value, onChange, onBlur },
  error,
  wrapperClassName,
  ...props
}) => (
  <div className={wrapperClassName || ''}>
    <Input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...omit(props, 'meta')}
    />
    <FieldError error={error} />
  </div>
);

ReduxInput.propTypes = propTypes;

export default enhance(ReduxInput);
