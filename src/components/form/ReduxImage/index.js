import { omit } from 'lodash';
import { pure } from 'recompose';
import { string, object } from 'prop-types';

const propTypes = {
  input: object.isRequired,
};

const enhance = pure;

const ReduxImage = ({
  input: { value, onChange },
  ...props
}) => (
  <img
    src={props.assets[value].file}
  />
);

ReduxImage.propTypes = propTypes;

export default enhance(ReduxImage);
