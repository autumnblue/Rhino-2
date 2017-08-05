import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import { string, func, oneOfType, arrayOf } from 'prop-types';

import { Checkbox } from 'src/components';
import { reduxFormInputType } from 'src/prop-types';

const propTypes = {
  input: reduxFormInputType.isRequired,
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
  onChange: ({ input: { onChange } }) => checked => onChange(checked),
});

const enhance = compose(
  propsEnhancer,
  handlersEnhancer,
  pure,
);

const ReduxCheckbox = ({
  input: { value },
  ...props
}) => (
  <Checkbox checked={value} {...props} />
);

ReduxCheckbox.propTypes = propTypes;

export default enhance(ReduxCheckbox);
