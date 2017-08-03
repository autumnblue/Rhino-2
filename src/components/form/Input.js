// we will need to add some features to button later
import { Input } from 'reactstrap';
import { compose, pure, withHandlers } from 'recompose';

const handlersEnhancer = withHandlers({
  onChange: ({ passValue, type, onChange }) => (evt) => {
    if(typeof onChange === 'function') {
      if(passValue) {
        return onChange(evt.target.value)
      }

      onChange(evt);
    }
  }
})

const enhance = compose(
  handlersEnhancer,
  pure,
);

export default enhance(Input);
