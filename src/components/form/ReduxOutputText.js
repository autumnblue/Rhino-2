import { reduxFormInputType } from 'src/prop-types';

const propTypes = {
  input: reduxFormInputType.isRequired,
};

const ReduxOutputText = ({ input: { value } }) => (
  <Base exists={value} component="span">{value}</Base>
);

ReduxOutputText.propTypes = propTypes;

export default ReduxOutputText;
