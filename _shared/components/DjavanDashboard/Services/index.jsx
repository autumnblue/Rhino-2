import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Services from './Services.jsx';
import ServicesActions from '../../../actions/services';


const mapStateToProps = (state) => state.services;

const mapDispatchToProps = (dispatch) => ({
  fetchServices: (filter) => dispatch(ServicesActions.fetchServices(filter)),
  orderChanged: (id, value, filter) => dispatch(ServicesActions.orderChanged(id, value, filter)),
  edit: (id) => dispatch(id ? push('/dashboard/services/edit/' + id) : push('/dashboard/services/add/')),
  filterChanged: (filter) => {dispatch(ServicesActions.filterChanged(filter))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
