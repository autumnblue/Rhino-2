import ReactSelect from 'react-select';
import { compose, pure, withHandlers } from 'recompose';
import { func } from 'prop-types';

const propTypes = {
  onChange: func.isRequired,
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
