import { Input } from 'reactstrap';
import { omit } from 'lodash';
import css from './style.css';

export default ({
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
