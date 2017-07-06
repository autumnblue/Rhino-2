import { Input } from 'reactstrap';
import { omit } from 'lodash';
import { pure } from 'recompose';
import { string, object } from 'prop-types';

import css from './style.css';

const propTypes = {
  input: object.isRequired,
  error: string,
};

const enhance = pure;

const ReduxInput = ({
  input: { value, onChange, onBlur },
  error,
  ...props
}) => (
  <div>
    <Input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...omit(props, 'meta')}
    />
    {error && <span className={css.error}>{error}</span>}
  </div>
);

ReduxInput.propTypes = propTypes;

export default enhance(ReduxInput);
