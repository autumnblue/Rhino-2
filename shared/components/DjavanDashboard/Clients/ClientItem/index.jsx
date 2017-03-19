import { connect } from 'react-redux';
import ClientItemLogic from './ClientItemLogic';
import ClientsActions from '../../../../actions/clients';
// import ClientItemActions from '../../../../actions/clientitem';
//// import UserActions from '../../../actions/users';

// const mapStateToProps = ({ session, client, user }) => ({
const mapStateToProps = ( clientItem ) => ({
  // currentUser: session.currentUser,
  // clientItem: clientItem.clientitems.clientitems,
  error: clientItem.clientitems.error,
  // showMore: clientItem.clientitems.showMore,
  // possibleUmbrellas: clientItem.clientitems.possibleUmbrellas,
  // umbrellasStatus: clientItem.clientitems.umbrellasStatus,
  //fetchClient: clientItem.clientitems.fetchClient,
});


const mapDispatchToProps = (dispatch) => ({

  updateClient: (id, val) => dispatch(ClientsActions.updateClient(id, val)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ClientItemLogic);
