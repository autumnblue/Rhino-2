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
            console.log(limit*page);
            console.log(response.body.meta.total_results);
            console.log((limit*page < response.body.meta.total_results));
            if (response.body) { //.data.meta.total_results > 0
              console.log(response.body);
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
  fetchClient: (id, val) =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_CLIENT_REQUEST,
          clientStatus: loadingStatus.LOADING,
        });
        // console.log("ClientItem (field: val, clientitembefore, clientitemafter:");
        // console.log(val.field + " : " + val.value);
        // console.log(val.clientitem);
        _.set(val.clientitem, val.field, val.value);
        // console.log(val.clientitem);
        return httpPut(`clients/${id}.json`, val.clientitem)
            .catch((error) =>
            {
              dispatch({
                type: Constants.FETCH_CLIENT_FAILURE,
                error: handleInternalErrors(error),
              });
              //should be a modification of props for field
              logger(error)
            }
            )
            .then((() => {
              val.clientitem["commit"] = true;
              httpPut(`clients/${id}.json`, val.clientitem)
                .catch((error) => logger(error))
                .then((response => {
                  if (response.body) { //.data.meta.total_results > 0
                    console.log(response.body);
                    dispatch({
                      type: Constants.FETCH_CLIENT,
                      client: [response.body.client],
                      id: id,
                    });
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
  updateClientsList: (newClients) => ({ type: Constants.UPDATE_CLIENTS_LIST, clients: newClients }),
  refreshClientsList: () => ({ type: Constants.REFRESH_CLIENTS_LIST }),
};

export default Actions;
