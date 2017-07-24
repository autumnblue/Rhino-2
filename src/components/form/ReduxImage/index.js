import { pure, withHandlers, compose } from 'recompose';
import { object, func } from 'prop-types';
import { get } from 'lodash';

const propTypes = {
  input: object.isRequired,
  assets: object,
  handleFileUpload: func.isRequired,
};

const handlersEnhancer = withHandlers({
  handleFileUpload: props => ({ target }) => {
    props.upload(target.files[0]);
  },
});

const enhance = compose(
  handlersEnhancer,
  pure,
);


const ReduxImage = ({
  input: { value },
  handleFileUpload,
  ...props
}) => (<div>
  <img
    src={get(props, `assets[${value}].file`, '')}
    style={{ maxWidth: '100%', maxHeight: '100%' }}
    alt=""
  />
  <input type="file" onChange={handleFileUpload} />
</div>);

ReduxImage.propTypes = propTypes;

export default enhance(ReduxImage);
