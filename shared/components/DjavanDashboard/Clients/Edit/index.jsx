import { connect } from 'react-redux';
import ClientsLogic from './ClientsLogic';
import ClientsActions from '../../../../actions/clients';

const mapStateToProps = (state) => ({
  currentClient: state.clients.currentClient
});


const mapDispatchToProps = (dispatch) => ({
  refreshClientsList: () => dispatch(ClientsActions.refreshClientsList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsLogic);
