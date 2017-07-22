import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { string, object, func, oneOfType, arrayOf } from 'prop-types';
import classNames from 'classnames';

import { FieldError } from 'src/components';

const propTypes = {
  input: object.isRequired,
  id: string.isRequired,
  label: string.isRequired,
  error: oneOfType([string, arrayOf(string)]),
  wrapperClassName: string,

  onChange: func.isRequired,
};

const propsEnhancer = withPropsOnChange(['wrapperClassName'], ({ wrapperClassName, id, input }) => ({
  wrapperClassName: classNames({
    [wrapperClassName]: !!wrapperClassName,
    'checkbox-custom': true,
    'checkbox-primary': true,
  }),
  id: id || input.name,
}));

const handlersEnhancer = withHandlers({
  onChange: ({ input: { onChange } }) => ({ target }) => onChange(target.checked),
});

const enhance = compose(
  propsEnhancer,
  handlersEnhancer,
  pure,
);

const ReduxCheckbox = ({
  input: { value },
  id,
  label,
  error,
  wrapperClassName,

  onChange,
}) => (
  <div className={wrapperClassName}>
    <input
      type="checkbox"
      id={id}
      checked={!!value}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
    <FieldError error={error} />
  </div>
);

ReduxCheckbox.propTypes = propTypes;

export default enhance(ReduxCheckbox);
