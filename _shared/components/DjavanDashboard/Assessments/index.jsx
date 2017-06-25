import { connect } from 'react-redux';
import AssessmentsLogic from './AssessmentsLogic';
import AssessmentsActions from '../../../actions/assessments';
//// import UserActions from '../../../actions/users';

// const mapStateToProps = ({ session, assessment, user }) => ({
const mapStateToProps = ( assessment ) => ({
  // currentUser: session.currentUser,
  assessments: assessment.assessments.assessments,
  loadingMore: assessment.assessments.loadingMore,
  hasMore: assessment.assessments.hasMore,
  page: assessment.assessments.page,
  assessmentsStatus: assessment.assessments.assessmentsStatus,
  error: assessment.assessments.error,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: (page, loadingMore) => {
    //dispatch(AssessmentsActions.mockAssessments(page, loadingMore));
    dispatch(AssessmentsActions.fetchAssessments(page, loadingMore));
  },
  viewAssessment: (id, title) => dispatch(AssessmentsActions.viewAssessment(id, title)),
  refreshAssessmentsList: () => dispatch(AssessmentsActions.refreshAssessmentsList()),
});


export default connect(mapStateToProps, mapDispatchToProps)(AssessmentsLogic);
