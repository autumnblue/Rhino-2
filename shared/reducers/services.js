import _ from 'lodash';
import Constants from '../constants';

export const initialState = {
  services: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case Constants.SERVICES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case Constants.SERVICES_LOADED: {
      return {
        ...state,
        loading: false,
        services: action.services
      };
    }

    case Constants.SERVICES_ORDER_CHANGED: {
      let services = state.services.map((service) => {
        if (service.id == action.id) {
          service.default_sort_priority = action.value;
        }
        return service;
      });

      return {
        ...state,
        services: services
      };
    }

    default:
      return state;
  }
}
