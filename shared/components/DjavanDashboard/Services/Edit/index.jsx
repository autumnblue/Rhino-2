import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Edit from './Edit.jsx';
import ServicesActions from '../../../../actions/services';
import EditActions from '../../../../actions/serviceedit';


const mapStateToProps = (state) => state.servicesedit;

const mapDispatchToProps = (dispatch) => ({
  createService: (service) => dispatch(EditActions.createService(service)),
  fetchService: (id) => dispatch(EditActions.fetchService(id)),
  setService: (service) => dispatch(EditActions.setService(service)),
  saveServiceValue: (id, name, value) => dispatch(EditActions.saveServiceValue(id, name, value)),
  uploadAsset: (file, service) => dispatch(EditActions.uploadAsset(file, service)),
  deleteService: (service) => dispatch(EditActions.deleteService(service)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
