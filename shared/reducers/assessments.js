import _ from 'lodash';
import Constants from '../constants';
import { loadingStatus } from '../constants/loadingStatus';

export const initialState = {
  error: null,
  assessments: [],
  assessmentsStatus: loadingStatus.UNINITIALIZED,
  loadingMore: false,
  hasMore: true,
  page: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case Constants.FETCH_ASSESSMENTS: {
      return {
        ...state,
        error: null,
        assessments: state.assessments.concat(action.assessments),
        loadingMore: action.loadingMore,
        assessmentsStatus: loadingStatus.LOADED,
        hasMore: action.hasMore,
      };
    }

    case Constants.FETCH_ASSESSMENTS_REQUEST: {
      return {
        ...state,
        assessmentsStatus: action.assessmentsStatus,
        loadingMore: action.loadingMore,
        page: action.page,
      };
    }

    case Constants.FETCH_ASSESSMENTS_FAILURE: {
      return {
        ...state,
        error: action.error,
        assessmentsStatus: loadingStatus.FAILED,
      };
    }

    case Constants.UPDATE_ASSESSMENTS_LIST: {
      return {
        ...state,
        assessments: action.assessments,
      };
    }

    case Constants.REFRESH_ASSESSMENTS_LIST: {
      return {
        ...state,
        assessmentsStatus: loadingStatus.UNINITIALIZED,
        assessments: [],
        hasMore: true,
        page: 0,
        loadingMore: false,
      };
    }

    default:
      return state;
  }
}
