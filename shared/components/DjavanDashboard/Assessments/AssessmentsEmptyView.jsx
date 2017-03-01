import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
// import RaisedButton from 'material-ui/RaisedButton';

const bem = makeBem('Assessments');

const AssessmentsEmptyView = ({ profileClickHandler }) =>
  <div className={bem.el('empty')}>
    <p>
      No Assessments
    </p>
    {/*<RaisedButton label="Go to new assessment" primary onTouchTap={assessmentClickHandler} />*/}
  </div>;


AssessmentsEmptyView.propTypes = {
  // assessmentClickHandler: PropTypes.func.isRequired,
};

export default AssessmentsEmptyView;
