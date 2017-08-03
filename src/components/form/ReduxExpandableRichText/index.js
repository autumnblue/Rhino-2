import { pure } from 'recompose';

import {ExpandableRichText} from 'src/components';

const enhance = pure;

const ReduxExpandableRichText = ({
  input: { value, onChange },
  ...props,
}) => (
  <ExpandableRichText
    value={value}
    onChange={onChange}
    {...props}
  />
)

export default enhance(ReduxExpandableRichText);
