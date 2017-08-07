import { pure } from 'recompose';
import { oneOfType, string, arrayOf } from 'prop-types';

import css from './style.css';

const propTypes = {
  error: oneOfType([string, arrayOf(string)]),
  className: string,
};

const enhance = pure;

const FieldError = ({ error, className }) => (
  <Base
    exists={error}
    className={`${css.error} ${className || ''}`}
  >
    {error}
  </Base>
);

FieldError.propTypes = propTypes;

export default enhance(FieldError);
