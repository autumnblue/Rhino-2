import { httpPut, httpGet } from '../utils';
import { handleInternalErrors, logger } from '../utils/handleInternalErrors';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';

const limit = 5;

const Actions = {
  viewClient: (id, title) => ({ type: Constants.VIEW_CLIENT, id, title }),
  fetchClients: (page, loadingMore) =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENTS_REQUEST,
          clientsStatus: loadingMore ? 'loaded' : 'loading',
          page,
          loadingMore,
        });
        return httpGet(`clients.json?page=${page}&per_page=${limit}&sort[]=id`)
          .catch((error) =>
            logger(error)
          )
          .then((response) => {
            // console.log(limit*page);
            // console.log(response.body.meta.total_results);
            // console.log((limit*page < response.body.meta.total_results));
            if (response.body) { //.data.meta.total_results > 0
              // console.log(response.body);
              dispatch({
                type: Constants.FETCH_CLIENTS,
                clients: response.body.clients,
                loadingMore: false,
                hasMore: (limit*page < response.body.meta.total_results),
              });
            } else {
              dispatch({
                type: Constants.FETCH_CLIENTS_FAILURE,
                error: handleInternalErrors(response),
              });
            }
          });
      }
    ),
  updateClient: (id, val) =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENT_REQUEST,
          clientStatus: loadingStatus.LOADING,
        });
        // console.log("ClientItem (field: val, clientitembefore, clientitemafter:");
        // console.log(val.field + " : " + val.value);
        // console.log(val.clientitem);
        let clientcopy = Object.assign({}, val.clientitem);
        _.set(clientcopy, val.field, val.value);
        // console.log(val.clientitem);
        return httpPut(`clients/${id}.json`, clientcopy)
            .catch((error) =>
            {
              console.log(error.response);
              dispatch({
                type: Constants.FETCH_CLIENT_FAILURE,
                error: handleInternalErrors(error),
              });
              //should be a modification of props for field
              logger(error);
            }
            )
            .then((() => {
              dispatch({
                type: Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS_REQUEST,
                clientStatus: loadingStatus.LOADING,
              });
              val.clientitem["commit"] = true;
              httpPut(`clients/${id}.json`, clientcopy)
                .catch((error) => logger(error))
                .then((response => {
                  if (response.body) { //.data.meta.total_results > 0
                    // console.log(response.body);
                    dispatch({
                      type: Constants.FETCH_CLIENT,
                      client: [response.body.client],
                      id: id,
                    });
                    dispatch({
                      type: Constants.UPDATE_POSSIBLE_UMBRELLAS,
                      umbrella: [response.body.client],
                      id: id,
                    })
                  } else {
                    dispatch({
                      type: Constants.FETCH_CLIENT_FAILURE,
                      error: handleInternalErrors(response),
                    });
                  }
                }));
            }));
      }
    ),

//  https://djavan-server.rsl.host/api/v1/clients.json?page=1&per_page=1000&sort[]=id&exclude[]=*&include[]=id&include[]=name&filter{umbrella.isnull}=1
//   updateClientsList: (newClients) => ({ type: Constants.UPDATE_CLIENTS_LIST, clients: newClients }),
  refreshClientsList: () => ({ type: Constants.REFRESH_CLIENTS_LIST }),
  clearClientError: () => ({type: Constants.CLEAR_CLIENT_ERROR }),

  fetchPossibleUmbrellas: () =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS_REQUEST,
          umbrellasStatus: loadingStatus.LOADING,
        });
        // console.log("Requesting Clients");
        return httpGet(`clients.json?page=1&per_page=1200&sort[]=id&exclude[]=*&include[]=id&include[]=name&filter{departments.isnull}=1`)
          .catch((error) =>
            logger(error)
          )
          .then((response) => {
            if (response.body) { //.data.meta.total_results > 0
              // console.log(response.body);
              dispatch({
                type: Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS,
                possibleUmbrellas: response.body.clients,
              });
            } else {
              dispatch({
                type: Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS_FAILURE,
                error: handleInternalErrors(response),
              });
            }
          });
      }
    ),
  // assignDepartmentToClient: () =>
  //   ((dispatch) => {
  //       dispatch({
  //         type: Constants.FETCH_CLIENTS_POSSIBLE_DEPARTMENTS_REQUEST,
  //         umbrellasStatus: loadingStatus.LOADING,
  //       });
  //       return httpGet(`clients.json?page=1&per_page=1200&sort[]=id&exclude[]=*&include[]=id&include[]=name&filter{departments.isnull}=1`)
  //         .catch((error) =>
  //           logger(error)
  //         )
  //         .then((response) => {
  //           if (response.body) { //.data.meta.total_results > 0
  //             console.log(response.body);
  //             dispatch({
  //               type: Constants.FETCH_CLIENTS_POSSIBLE_DEPARTMENTS,
  //               possibleUmbrellas: response.body.clients,
  //             });
  //           } else {
  //             dispatch({
  //               type: Constants.FETCH_CLIENTS_POSSIBLE_DEPARTMENTS_FAILURE,
  //               error: handleInternalErrors(response),
  //             });
  //           }
  //         });
  //     }
  //   ),
};

export default Actions;
