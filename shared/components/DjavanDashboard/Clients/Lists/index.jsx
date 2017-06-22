import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ClientsLogic from './ClientsLogic';
import ClientsActions from '../../../../actions/clients';
// import UserActions from '../../../actions/users';

// const mapStateToProps = ({ session, client, user }) => ({
const mapStateToProps = (state) => ({
  // currentUser: session.currentUser,
  clients: state.clients.clients,
  meta: state.clients.meta,
  loadingMore: state.clients.loadingMore,
  hasMore: state.clients.hasMore,
  page: state.clients.page,
  clientsStatus: state.clients.clientsStatus,
  error: state.clients.error,
  umbrellasStatus: state.clients.umbrellasStatus,
  possibleUmbrellas: state.clients.possibleUmbrellas,
});

const mapDispatchToProps = (dispatch) => ({
  addClient: () => dispatch(push('/dashboard/clients/edit/new')),
  loadData: (page, sort, limit, filter, loadingMore) => {
    dispatch(ClientsActions.fetchClients(page, sort, limit, filter, loadingMore));
  },
  viewClient: (client) => dispatch(ClientsActions.viewClient(client)),
  refreshClientsList: () => dispatch(ClientsActions.refreshClientsList()),
  fetchPossibleUmbrellas: (id, val) => dispatch(ClientsActions.fetchPossibleUmbrellas()),
  clearClientError: () => dispatch(ClientsActions.clearClientError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsLogic);
