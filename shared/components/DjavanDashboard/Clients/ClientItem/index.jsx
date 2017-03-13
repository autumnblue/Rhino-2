import { connect } from 'react-redux';
import ClientItemLogic from './ClientItemLogic';
import ClientsActions from '../../../../actions/clients';
//// import UserActions from '../../../actions/users';

// const mapStateToProps = ({ session, client, user }) => ({
const mapStateToProps = ( clientItem ) => ({
  // currentUser: session.currentUser,
  // clientItem: clientItem.clientitems.clientitems,
  error: clientItem.clientitems.error,
  showMore: clientItem.clientitems.showMore,
  //fetchClient: clientItem.clientitems.fetchClient,
});


const mapDispatchToProps = (dispatch) => ({
  //todo: save updated client, fetch single client, delete single client,
  //toggleMore: () => dispatch(ClientItemActions.toggleMore()),
  // loadData: (page, loadingMore) => {
  //   //dispatch(ClientsActions.mockClients(page, loadingMore));
  //   dispatch(ClientsActions.fetchClients(page, loadingMore));
  // },
  //refreshClientsList: () => dispatch(ClientsItemActions.refreshClientsList()),
  //saveClientsItem: () => dispatch(ClientsItemActions.saveClientsItem()),
  fetchClient: (id, val) => dispatch(ClientsActions.fetchClient(id, val)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ClientItemLogic);
