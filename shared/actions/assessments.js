import { httpPost, httpGet } from '../utils';
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
        return httpGet(`assessments.json?page=${page}&per_page=${limit}`)
          .catch((error) =>
            logger(error)
          )
          .then((response) => {
            if (response.body) { //.data.meta.total_results > 0
              console.log(response.body);
              dispatch({
                type: Constants.FETCH_ASSESSMENTS,
                assessments: response.body.assessments,
                loadingMore: false,
                hasMore: !(limit > response.body.meta.total_results),
              });
            } else {
              dispatch({
                type: Constants.FETCH_ASSESSMENTS_FAILURE,
                error: handleInternalErrors(response),
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
