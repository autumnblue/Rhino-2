import { pure } from 'recompose';
import { object } from 'prop-types';

const propTypes = {
  input: object.isRequired,
  assets: object,
};

const enhance = pure;

const ReduxImage = ({
  input: { value, onChange },
  ...props
}) => (
  <div>
    <img
      src={props.assets[value].file}
      style={{ maxWidth: '100%', maxHeight: '100%' }}
      onChange={onChange}
      alt=""
    />
  </div>
);

ReduxImage.propTypes = propTypes;

export default enhance(ReduxImage);
