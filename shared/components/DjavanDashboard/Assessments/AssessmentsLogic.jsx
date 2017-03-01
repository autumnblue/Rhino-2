import React, { Component, PropTypes } from 'react';
import AssessmentsView from './AssessmentsView';
import NotificationModal from '../../Utilities/NotificationModal';

export default class AssessmentsLogic extends Component {

  static propTypes = {
    // currentUser: PropTypes.object,
    assessments: PropTypes.array.isRequired,
    loadingMore: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    assessmentsStatus: PropTypes.string.isRequired,
    loadData: PropTypes.func.isRequired,
    // viewAssessment: PropTypes.func.isRequired,
    // refreshAssessmentsList: PropTypes.func.isRequired,
    error: PropTypes.string,
  }

  state = {
    currentPage: 1,
  }

  componentWillMount() {

    if (this.props.assessmentsStatus !== 'loaded') {
      this.props.loadData(this.state.currentPage, false);
    }

    if (this.props.page > this.state.currentPage) {
      this.setState({ currentPage: this.props.page });
    }

  }

  componentWillUnmount() {
    // this.props.refreshAssessmentsList();
  }

  title = 'Assessments'
  backLink = ''

  loadMoreItems = async (options) => {
    if (options.previousPosition === 'below') {
      await this.setState({
        currentPage: this.state.currentPage + 1,
      });
      this.props.loadData(this.state.currentPage, true);
    }
  }



  render() {
    return <AssessmentsView {...this} />;
  }

}


AssessmentsLogic.contextTypes = {
  router: PropTypes.object.isRequired,
};
