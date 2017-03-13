// import { httpPost, httpGet } from '../utils';
// import { handleInternalErrors, logger } from '../utils/handleInternalErrors';
import Constants from '../constants';

// const limit = 5;

const Actions = {
  // viewClient: (id, title) => ({ type: Constants.VIEW_CLIENT, id, title }),
  // fetchClients: (page, loadingMore) =>
  //   ((dispatch) => {
  //       dispatch({
  //         type: Constants.FETCH_CLIENTS_REQUEST,
  //         clientsStatus: loadingMore ? 'loaded' : 'loading',
  //         page,
  //         loadingMore,
  //       });
  //       return httpGet(`clients.json?page=${page}&per_page=${limit}`)
  //         .catch((error) =>
  //           logger(error)
  //         )
  //         .then((response) => {
  //           if (response.body) { //.data.meta.total_results > 0
  //             console.log(response.body);
  //             dispatch({
  //               type: Constants.FETCH_CLIENTS,
  //               clients: response.body.clients,
  //               loadingMore: false,
  //               hasMore: !(limit > response.body.meta.total_results),
  //             });
  //           } else {
  //             dispatch({
  //               type: Constants.FETCH_CLIENTS_FAILURE,
  //               error: handleInternalErrors(response),
  //             });
  //           }
  //         });
  //     }
  //   ),
  // updateClientsList: (newClients) => ({ type: Constants.UPDATE_CLIENTS_LIST, clients: newClients }),
  // refreshClientsList: () => ({ type: Constants.REFRESH_CLIENTS_LIST }),
  // toggleMore: () => ({ type: Constants.TOGGLE_EDIT_VIEW }),
};

export default Actions;
