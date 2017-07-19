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
    style={{maxWidth: "100%", maxHeight: "100%"}}
  />
);

ReduxImage.propTypes = propTypes;

export default enhance(ReduxImage);
