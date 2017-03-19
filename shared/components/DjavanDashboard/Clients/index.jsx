import { connect } from 'react-redux';
import ClientsLogic from './ClientsLogic';
import ClientsActions from '../../../actions/clients';
//// import UserActions from '../../../actions/users';

// const mapStateToProps = ({ session, client, user }) => ({
const mapStateToProps = ( client ) => ({
  // currentUser: session.currentUser,
  clients: client.clients.clients,
  loadingMore: client.clients.loadingMore,
  hasMore: client.clients.hasMore,
  page: client.clients.page,
  clientsStatus: client.clients.clientsStatus,
  error: client.clients.error,
  umbrellasStatus: client.clients.umbrellasStatus,
  possibleUmbrellas: client.clients.possibleUmbrellas,
});


const mapDispatchToProps = (dispatch) => ({
  loadData: (page, loadingMore) => {
    //dispatch(ClientsActions.mockClients(page, loadingMore));
    dispatch(ClientsActions.fetchClients(page, loadingMore));
  },
  viewClient: (id, title) => dispatch(ClientsActions.viewClient(id, title)),
  refreshClientsList: () => dispatch(ClientsActions.refreshClientsList()),
  // fetchClient: (id) => dispatch(ClientsActions.fetchClient(id)),
  fetchPossibleUmbrellas: (id, val) => dispatch(ClientsActions.fetchPossibleUmbrellas()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsLogic);
