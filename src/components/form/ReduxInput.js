import { Input } from 'reactstrap';
import { omit } from 'lodash';

export default ({
  input: { value, onChange, onBlur },
  meta: { touched, error, warning },
  meta,
  ...props
}) => (
  <div>
    <Input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...omit(props, 'meta')}
    />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)
