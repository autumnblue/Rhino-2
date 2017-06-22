import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Edit from './Edit.jsx';
import EditActions from '../../../../actions/clientedit';


const mapStateToProps = (state) => state.clientedit;

const mapDispatchToProps = (dispatch) => ({
  fetchClient: (id) => dispatch(EditActions.fetchClient(id)),
  fetchParentsAndIssuers: () => dispatch(EditActions.fetchParentsAndIssuers()),
  setClient: (client) => dispatch(EditActions.setClient(client)),
  saveValue: (client, name, value, shouldSaveOnServer) => dispatch(EditActions.saveValue(client, name, value, shouldSaveOnServer)),
  goToEdit: (id) => dispatch(push(`/dashboard/clients/edit/${id}`)),
  goToClients: () => dispatch(push('/dashboard/clients')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
