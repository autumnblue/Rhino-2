import { pure } from 'recompose';

import { ExpandableRichText } from 'src/components';
import { reduxFormInputType } from 'src/prop-types';

const propTypes = {
  input: reduxFormInputType.isRequired,
};

const enhance = pure;

const ReduxExpandableRichText = ({
  input: { value, onChange },
  ...props
}) => (
  <ExpandableRichText
    value={value}
    onChange={onChange}
    {...props}
  />
);

ReduxExpandableRichText.propTypes = propTypes;

export default enhance(ReduxExpandableRichText);
