import { pure } from 'recompose';
import { oneOfType, string, arrayOf } from 'prop-types';

import css from './style.css';

const propTypes = {
  error: oneOfType([string, arrayOf(string)]),
};

const enhance = pure;

const FieldError = ({ error }) => (
  <Base
    exists={error}
    className={css.error}
  >
    {error}
  </Base>
);

FieldError.propTypes = propTypes;

export default enhance(FieldError);
