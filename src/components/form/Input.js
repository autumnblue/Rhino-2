// we will need to add some features to button later
import { Input } from 'reactstrap';
import { compose, pure, withHandlers, mapProps } from 'recompose';
import { omit } from 'lodash';

const handlersEnhancer = withHandlers({
  onChange: ({ passValue, onChange }) => (evt) => {
    if (typeof onChange === 'function') {
      if (passValue) {
        return onChange(evt.target.value);
      }

      onChange(evt);
    }

    return undefined;
  },
});

const omitPropsEnhancer = mapProps(props => omit(props, ['passValue']));

const enhance = compose(
  handlersEnhancer,
  omitPropsEnhancer,
  pure,
);

export default enhance(Input);
