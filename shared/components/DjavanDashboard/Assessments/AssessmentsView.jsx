import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';
import makeBem from 'bem-cx';
import DashboardBar from '../../Dashboard/Bar/DashboardBar';
import DashboardLoader from '../../Dashboard/Content/DashboardLoader';
import AssessmentsViewItem from './AssessmentsViewItem';
import AssessmentsEmptyView from './AssessmentsEmptyView';
import { isLoading, isLoaded } from '../../../constants/loadingStatus';
// import Sticky from 'react-stickynode';
// import InfiniteScrolling from '../../Utilities/InfiniteScrolling';

const bem = makeBem('djavanDashboardContent');

const AssessmentsView = (
  { title,
    backLink,
    loadMoreItems,
    // assessmentClickHandler,
    props: {
      // currentUser,
      assessments,
      assessmentsStatus,
      hasMore,
      loadingMore,
    },
  }
) =>
  <div>
    <Helmet title="Assessments" titleTemplate="%s | Rhino Security Labs Djavan Security Assessment and Reporting System" />
    {/*currentUser && */<DashboardBar title="Assessments" backLink={backLink} /*currentUser={currentUser}*/ />}

    <div className={bem.el('details').mod({ smallHeader: true, narrow: true })}>
      <DashboardLoader loading={isLoading(assessmentsStatus)} />
      {/*<Sticky enabled top={50} innerZ={999}>*/}
        {/*/!*{<StickyComponent />}*!/*/}
      {/*</Sticky>*/}
      {isLoaded(assessmentsStatus) && _.isEmpty(assessments) && <AssessmentsEmptyView /*newAssessmentClickHandler={newAssessmentClickHandler}*/ />}
      {isLoaded(assessmentsStatus) && _.map(assessments, (assessment, index) =>
        <AssessmentsViewItem key={index} /*assessmentClickHandler={assessmentClickHandler}*/ {...assessment} />)
      }
      {/*<InfiniteScrolling*/}
        {/*loadMore={loadMoreItems}*/}
        {/*loadingMore={loadingMore}*/}
        {/*hasMore={hasMore}*/}
      {/*/>*/}
    </div>
  </div>;

AssessmentsView.propTypes = {
  title: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
  // assessmentClickHandler: PropTypes.func.isRequired,
  // newAssessmentClickHandler: PropTypes.func.isRequired,
  loadMoreItems: PropTypes.func.isRequired,
  props: PropTypes.shape({
    // currentUser: PropTypes.object.isRequired,
    assessments: PropTypes.array.isRequired,
    assessmentsStatus: PropTypes.string.isRequired,
    hasMore: PropTypes.bool.isRequired,
    loadingMore: PropTypes.bool.isRequired,
  }),
};

export default AssessmentsView;
