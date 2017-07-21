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

/*
handleFileUpload(event) {
  let file = event.target.files[0];
  this.props.uploadAsset(file, this.props.service);
}

uploadAsset: (file, service) =>
  ((dispatch) => {
    dispatch({type: Constants.SERVICES_EDIT_LOADING});

    const uploadAsset = (file) => {
      return httpPost('assets', {
        file: file,
        commit: true
      }, {
        'Content-Type': 'multipart/form-data'
      }).then(function (res) {
        dispatch(Actions.saveServiceValue(service.id, 'feature_image', res.body.asset.id));
        dispatch({
          type: Constants.SERVICES_EDIT_SET_VALUE,
          name: 'feature_image',
          value: res.body.asset
        });
      }).catch((error) => {
        dispatch(Actions.handleError(error.response));
      });
    }

    if (service.feature_image) {
      //if there was image, deleting previous asset before load new
      httpDelete(`assets/${service.feature_image.id}`)
        .then((res) => {
          uploadAsset(file);
        }).catch((error) => {
        dispatch(Actions.handleError(error.response));
      });
    } else {
      uploadAsset(file);
    }


  }),
*/
