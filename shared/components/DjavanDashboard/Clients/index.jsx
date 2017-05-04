import { connect } from 'react-redux';
import ClientsLogic from './ClientsLogic';
import ClientsActions from '../../../actions/clients';
// import UserActions from '../../../actions/users';

// const mapStateToProps = ({ session, client, user }) => ({
const mapStateToProps = (state) => ({
  // currentUser: session.currentUser,
  clients: state.clients.clients,
  loadingMore: state.clients.loadingMore,
  hasMore: state.clients.hasMore,
  page: state.clients.page,
  clientsStatus: state.clients.clientsStatus,
  error: state.clients.error,
  umbrellasStatus: state.clients.umbrellasStatus,
  possibleUmbrellas: state.clients.possibleUmbrellas,
});


const mapDispatchToProps = (dispatch) => ({
  loadData: (page, loadingMore) => {
    // dispatch(ClientsActions.mockClients(page, loadingMore));
    dispatch(ClientsActions.fetchClients(page, loadingMore));
  },
  viewClient: (id, title) => dispatch(ClientsActions.viewClient(id, title)),
  refreshClientsList: () => dispatch(ClientsActions.refreshClientsList()),
  // fetchClient: (id) => dispatch(ClientsActions.fetchClient(id)),
  fetchPossibleUmbrellas: (id, val) => dispatch(ClientsActions.fetchPossibleUmbrellas()),
  clearClientError: () => dispatch(ClientsActions.clearClientError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsLogic);
