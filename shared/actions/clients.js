import { push } from 'react-router-redux';
import { httpDelete, httpGet, httpPatch, httpPost, httpPut } from '../utils';
import { handleInternalErrors, logger } from '../utils/handleInternalErrors';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';

const Actions = {
  viewClient: (client) =>
    ((dispatch) => {
      console.log('$$$ Client :  ', client);
      dispatch({
        type: Constants.VIEW_CLIENT_REQUEST,
      });
      dispatch({
        type: Constants.VIEW_CLIENT_SUCCESS,
        client,
      });
      dispatch(Actions.fetchClientUmbrella(client.id));
      dispatch(push('/dashboard/edit'));
    }),
  createClient: (client) =>
    ((dispatch) => {
      dispatch({
        type: Constants.CREATE_CLIENT_REQUEST,
        client,
      })
      return httpPost(`clients/`, client)
        .then((response) => {
          console.log('$$$$$$$$$:  ', response);
        })
        .catch((error) => {
          logger(error);
        });
    }),
  deleteClient: (client) =>
    ((dispatch) => {
      return httpDelete(`clients/${client}`)
        .then((response) => {
          dispatch(push('/dashboard/list'));
        })
        .catch((error) => {
          logger(error);
        })
    }),
  fetchClients: (page, sort, limit, filter, loadingMore) =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENTS_REQUEST,
          clientsStatus: loadingMore ? 'loaded' : 'loading',
          page,
          loadingMore,
        });
        
        return httpGet(`clients.json?page=${page}&per_page=${limit}&sort[]=${sort}&filter{name.icontains}=${filter}`)
          .then((response) => {
            if (response.body) {
              dispatch({
                type: Constants.FETCH_CLIENTS,
                clients: response.body.clients,
                meta: response.body.meta,
                loadingMore: false,
                hasMore: (limit*page < response.body.meta.total_results),
              });
            } else {
              dispatch({
                type: Constants.FETCH_CLIENTS_FAILURE,
                error: handleInternalErrors(response),
              });
            }
          })
          .catch((error) => {
            logger(error)
          });
      }
    ),
  updateClient: (id, val) =>
    ((dispatch) => {
        // dispatch({
        //   type: Constants.FETCH_CLIENT_REQUEST,
        //   clientStatus: loadingStatus.LOADING,
        // });

        let clientcopy = {};
        clientcopy[val.field] = val.value;
        return httpPatch(`clients/${id}.json`, clientcopy)
            .then(() => {
              dispatch({
                type: Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS_REQUEST,
                clientStatus: loadingStatus.LOADING,
              });

              clientcopy["commit"] = true;
              httpPatch(`clients/${id}.json`, clientcopy)
                .then((response) => {
                  if (response.body) {
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
                })
                .catch((error) => logger(error));
            })
            .catch((error) => {
              console.log(error.response);
              dispatch({
                type: Constants.FETCH_CLIENT_FAILURE,
                error: handleInternalErrors(error),
              });
              //should be a modification of props for field
              logger(error);
            });
      }
    ),
  finishClient: () =>
    ((dispatch) => {
        dispatch({
          type: Constants.FINISH_CLIENT,
        })
        dispatch(push('/dashboard/list'));
    }),
//  https://djavan-server.rsl.host/api/v1/clients.json?page=1&per_page=1000&sort[]=id&exclude[]=*&include[]=id&include[]=name&filter{umbrella.isnull}=1
//   updateClientsList: (newClients) => ({ type: Constants.UPDATE_CLIENTS_LIST, clients: newClients }),
  refreshClientsList: () => ({ type: Constants.REFRESH_CLIENTS_LIST }),
  clearClientError: () => ({type: Constants.CLEAR_CLIENT_ERROR }),

  fetchClientUmbrella: (client) =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENT_UMBRELLA_REQUEST,
          umbrellasStatus: loadingStatus.LOADING,
        });
        return httpGet(`clients/${client}?include[]=departments&include[]=umbrella`)
          .then((response) => {
            console.log('$$$ Umbrella :  ', response.body);
            if (response.body) {
              dispatch({
                type: Constants.FETCH_CLIENT_UMBRELLA,
                client: response.body.client,
              });
            } else {
              dispatch({
                type: Constants.FETCH_CLIENT_UMBRELLA_FAILURE,
                error: handleInternalErrors(response),
              });
            }
          })
          .catch((error) =>
            logger(error)
          );
    }),

  fetchPossibleUmbrellas: () =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS_REQUEST,
          umbrellasStatus: loadingStatus.LOADING,
        });
        // console.log("Requesting Clients");
        return httpGet(`clients.json?page=1&per_page=1200&sort[]=id&exclude[]=*&include[]=id&include[]=name&filter{departments.isnull}=1`)
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
          })
          .catch((error) =>
            logger(error)
          );
      }),
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
