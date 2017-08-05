import ReactSelect from 'react-select';
import { compose, pure, withHandlers } from 'recompose';
import { string, object, oneOfType, arrayOf } from 'prop-types';

import { FieldError } from 'src/components';

const propTypes = {
};

const handlersEnhancer = withHandlers({
  onChange: ({ onChange }) => v => onChange(v ? v.value : null),
});

const enhance = compose(
  handlersEnhancer,
  pure,
);

const Select = ({
  onChange,
  ...props
}) => (
    <ReactSelect
      onChange={onChange}
      {...props}
    />
);

Select.propTypes = propTypes;

export default enhance(Select);
