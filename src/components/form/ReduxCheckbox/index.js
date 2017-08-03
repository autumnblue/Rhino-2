import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { string, object, func, oneOfType, arrayOf } from 'prop-types';
import classNames from 'classnames';

import { Checkbox } from 'src/components';

const propTypes = {
  input: object.isRequired,
  id: string.isRequired,
  label: string.isRequired,
  error: oneOfType([string, arrayOf(string)]),
  wrapperClassName: string,

  onChange: func.isRequired,
};

const propsEnhancer = withPropsOnChange(['id'], ({ id, input }) => ({
  id: id || input.name,
}));

const handlersEnhancer = withHandlers({
  onChange: ({ input: { onChange } }) => (checked) => onChange(checked),
});

const enhance = compose(
  propsEnhancer,
  handlersEnhancer,
  pure,
);

const ReduxCheckbox = ({
  input: { value },
  ...props,
}) => (
  <Checkbox checked={value} {...props} />
);

ReduxCheckbox.propTypes = propTypes;

export default enhance(ReduxCheckbox);
