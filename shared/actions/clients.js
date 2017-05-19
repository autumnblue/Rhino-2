import { push, replace } from 'react-router-redux';
import cookie from 'react-cookie';
import { httpDelete, httpGet, httpPatch, httpPost, httpPut } from '../utils';
import { handleInternalErrors, logger } from '../utils/handleInternalErrors';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';

const Actions = {
  viewClient: (client) =>
    ((dispatch) => {
      dispatch({
        type: Constants.VIEW_CLIENT_REQUEST,
      });
      dispatch({
        type: Constants.VIEW_CLIENT_SUCCESS,
        client,
      });
      dispatch(Actions.fetchClientUmbrella(client.id));
      dispatch(push('/dashboard/clients/edit'));
    }),

  createClient: (client) =>
    ((dispatch) => {
      dispatch({
        type: Constants.CREATE_CLIENT_REQUEST,
        client,
      })
      return httpPost(`clients/`, client)
        .then((response) => {
          if (response.body) {
            dispatch(push('/dashboard/clients/list'));
            return response.body;
          }
        })
        .catch((error) =>
          dispatch(Actions.handleErrors(error.response))
        );
    }),

  deleteClient: (client) =>
    ((dispatch) => {
      return httpDelete(`clients/${client}`)
        .then((response) => {
          dispatch(push('/dashboard/clients/list'));
        })
        .catch((error) => 
          dispatch(Actions.handleErrors(error.response.status))
        )
    }),

  fetchClients: (page, sort, limit, filter, loadingMore) =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENTS_REQUEST,
          clientsStatus: loadingMore ? 'loaded' : 'loading',
          page,
          loadingMore,
        });
        
        return httpGet(`clients.json?include[]=departments&include[]=umbrella&page=${page}&per_page=${limit}&sort[]=${sort}&filter{name.icontains}=${filter}`)
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
          .catch((error) =>
            dispatch(Actions.handleErrors(error.response))
          );
      }
    ),

  updateClient: (id, val) =>
    ((dispatch) => {

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
              dispatch(Actions.handleErrors(error.response));
            });
      }
    ),
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
            if (client !== response.body.client.id) {
              dispatch({
                type: Constants.FETCH_CLIENT_UMBRELLA,
                client: response.body.client,
              });
            }
          })
          .catch((error) =>
            dispatch(Actions.handleErrors(error.response))
          );
    }),

  fetchPossibleUmbrellas: () =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENTS_POSSIBLE_UMBRELLAS_REQUEST,
          umbrellasStatus: loadingStatus.LOADING,
        });
        return httpGet(`clients.json?page=1&per_page=1200&sort[]=id&exclude[]=*&include[]=id&include[]=name&filter{departments.isnull}=1`)
          .then((response) => {
            if (response.body) {
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
            dispatch(Actions.handleErrors(error.response))
          );
      }),

  handleErrors: (response) =>
    ((dispatch) => {
      if (response.status == 403) {
        cookie.remove('token', { path: '/' });
        dispatch(replace('/'));
      } else {
        return response;
      }
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
