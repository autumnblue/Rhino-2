import { httpPost, httpDelete } from '../utils';
import { handleInternalErrors, logger } from '../utils/handleInternalErrors';
import Constants from '../constants';

const limit = 5;

const Actions = {
  viewAssessment: (id, title) => ({ type: Constants.VIEW_ASSESSMENT, id, title }),
  fetchAssessments: (page, loadingMore) =>
    ((dispatch) => {
        dispatch({
          type: Constants.FETCH_ASSESSMENTS_REQUEST,
          assessmentsStatus: loadingMore ? 'loaded' : 'loading',
          page,
          loadingMore,
        });
        return httpPost(`assessment/assessments?page=${page}&limit=${limit}`)
          .catch((error) =>
            logger(error)
          )
          .then((response) => {
            if (response.data.success) {
              dispatch({
                type: Constants.FETCH_ASSESSMENTS,
                assessments: response.data.result,
                loadingMore: false,
                hasMore: !(limit > response.data.result.length),
              });
            } else {
              dispatch({
                type: Constants.FETCH_ASSESSMENTS_FAILURE,
                error: handleInternalErrors(response.data),
              });
            }
          });
      }
    ),
  assignAssessment: ({ assessmentId, userId, title }) =>
    ((dispatch) => {
        httpPost(`assessment/${assessmentId}/${userId}`, {
          event: 'ASSIGNS_ASSESSMENT',
        })
          .catch((error) => {
            logger(error);
          })
          .then((response) => {
            if (response.data.success) {
              dispatch({
                type: Constants.ASSESSMENT_ASSIGN_SUCCESS,
                id: assessmentId,
                title,
              });
            } else {
              dispatch({
                type: Constants.ASSESSMENT_ASSIGN_FAILURE,
                error: handleInternalErrors(response.data),
              });
            }
          });
      }
    ),
  updateAssessmentsList: (newAssessments) => ({ type: Constants.UPDATE_ASSESSMENTS_LIST, assessments: newAssessments }),
  refreshAssessmentsList: () => ({ type: Constants.REFRESH_ASSESSMENTS_LIST }),
};

export default Actions;
