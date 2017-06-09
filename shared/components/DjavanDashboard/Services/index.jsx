import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Services from './Services.jsx';
import ServicesActions from '../../../actions/services';


const mapStateToProps = (state) => state.services;

const mapDispatchToProps = (dispatch) => ({
  fetchServices: () => dispatch(ServicesActions.fetchServices()),
  orderChanged: (id, value) => dispatch(ServicesActions.orderChanged(id, value)),
  edit: (id) => dispatch(id ? push('/dashboard/services/edit/' + id) : push('/dashboard/services/add/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
