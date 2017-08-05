import { omit } from 'lodash';
import { pure } from 'recompose';
import { string, oneOfType, arrayOf } from 'prop-types';

import { Input, FieldError } from 'src/components';
import { reduxFormInputType } from 'src/prop-types';

const propTypes = {
  input: reduxFormInputType.isRequired,
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
