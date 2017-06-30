import { push, replace } from 'react-router-redux';
import cookie from 'react-cookie';
import _ from 'lodash';
import { httpDelete, httpGet, httpPatch, httpPost, httpPut } from '../utils';
import Constants from '../constants';
import ActionsError from './error';

const Actions = {
  fetchClient: (id) =>
    ((dispatch) => {
      if (!id) {
        let projectManagers = [{ id: 0, label: "Default_PM" }];
        dispatch({
          type: Constants.CLIENTS_EDIT_SET,
          client: {},
          projectManagers : projectManagers,
        });

        dispatch({type: Constants.CLIENTS_EDIT_LOADED});

        return;
      }

      dispatch({type: Constants.CLIENTS_EDIT_LOADING});

      httpGet(`clients/${id}?include[]=departments&include[]=umbrella`)
        .then((response) => {
          if (response.body) {
            dispatch({type: Constants.CLIENTS_EDIT_LOADED});
            let client = response.body.client;

            if (!client.umbrella) {
              client.umbrella = 0;
            } else if (_.isObject(client.umbrella)) {
              client.umbrellaName = client.umbrella.name;
              client.umbrella = client.umbrella.id;
            }

            if (client.issuer) {
              client.issuer = client.issuer.id;
            }

            let projectManagers = [];
            projectManagers.push({ id: 0, label: "Default_PM" });
            if (client.project_manager) {
              projectManagers.push({ id: client.project_manager.id, label: client.project_manager.first_name + " " + client.project_manager.last_name });
              client.project_manager = client.project_manager.id;
            }

            dispatch({
              type: Constants.CLIENTS_EDIT_SET,
              client: response.body.client,
              projectManagers : projectManagers,
            });
          } else {
            dispatch(Actions.handleError(response));
          }
        })
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });

    }),

  fetchParentsAndIssuers: () =>
    ((dispatch) => {
      httpGet('clients?per_page=1000&sort[]=id&include[]=umbrella')
        .then((response) => {
          if (response.body) {
            let parents = _.filter(response.body.clients, (client) => !client.umbrella);
            parents.unshift({id:0, name:'N/A'});
            dispatch({
              type: Constants.CLIENTS_EDIT_SET_PARENTS,
              parents: parents,
            });
          } else {
            dispatch(Actions.handleError(response));
          }
        })
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });

      httpGet('issuers?per_page=1000')
        .then((response) => {
          dispatch({
            type: Constants.CLIENTS_EDIT_SET_ISSUERS,
            issuers: response.body.issuers
          });
        })
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });
    }),

  setClient: (client) =>
    ((dispatch) => {
      dispatch({type: Constants.CLIENTS_EDIT_SET, client: client});
    }),

  saveValue: (client, name, value, shouldSaveOnServer) =>
    ((dispatch) => {
      let newValue = {};
      newValue[name] = value;
      client = {...client, ...newValue};
      dispatch({type: Constants.CLIENTS_EDIT_SET, client: client});
      if (client.id && shouldSaveOnServer) {

        let data = {};
        data['commit'] = true;
        data[name] = value;
        httpPatch(`clients/${client.id}`, data)
          .then((response) => {
            if (response.body) {
              dispatch({type: Constants.SERVICES_EDIT_LOADED});
            } else {
              dispatch(Actions.handleError(error.response));
            }
          })
          .catch((error) => {
            dispatch(Actions.handleError(error.response));
          });

      } else {

        if (shouldSaveOnServer) {
          dispatch({type: Constants.CLIENTS_EDIT_LOADING});
          let data = {};
          data['commit'] = true;
          data = {...data, ...client};
          httpPost('clients', data)
            .then((response) => {
              if (response.body) {
                dispatch({type: Constants.CLIENTS_EDIT_LOADED});
              } else {
                dispatch(Actions.handleError(error.response));
              }
            })
            .catch((error) => {
              dispatch(Actions.handleError(error.response));
            });
        }

      }
    }),

  delete: (id) =>
    ((dispatch) => {
      dispatch({type: Constants.CLIENTS_EDIT_LOADING});
      httpDelete(`clients/${id}`, {commit:true})
        .then((response) => {
            dispatch(push('/dashboard/clients/list'));
        })
        .catch((error) => {
          dispatch(Actions.handleError(error.response));
        });

    }),

  handleError: (response) =>
    ((dispatch) => {
      dispatch({type: Constants.CLIENTS_EDIT_LOADED});
      dispatch(ActionsError.response(response));
    }),
};

export default Actions;
