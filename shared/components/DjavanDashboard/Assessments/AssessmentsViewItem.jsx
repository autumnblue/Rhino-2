import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import FlatButton from 'material-ui/FlatButton';
import DashboardCard from '../../Dashboard/Card/DashboardCard';
import DashboardCardTitle from '../../Dashboard/Card/DashboardCardTitle';
import DashboardCardSubtitle from '../../Dashboard/Card/DashboardCardSubtitle';
// import DashboardCardDetails from '../../Dashboard/Card/DashboardCardDetails';
import DashboardCardAction from '../../Dashboard/Card/DashboardCardAction';
import DashboardCardActionRight from '../../Dashboard/Card/DashboardCardActionRight';
import DashboardCardSlicer from '../../Dashboard/Card/DashboardCardSlicer';
// import DashboardCardSlicerLeft from '../../Dashboard/Card/DashboardCardSlicerLeft';
import DashboardCardSlicerMiddle from '../../Dashboard/Card/DashboardCardSlicerMiddle';

const bem = makeBem('assessments');

const AssessmentsViewItem = ({
  assessmentClickHandler,
  id,
  title,
  subtitle,
  createdDate,
//  properties...
}) =>
  <DashboardCard clickHandler={() => assessmentClickHandler(id, title)}>
    <div className={bem.mod({ interactive: true })}>
      <DashboardCardSlicer>
        {/*<DashboardCardSlicerLeft>*/}
          {/*<div>*/}
            {/*{previewImage && <img src={previewImage} alt="" />}*/}
          {/*</div>*/}
        {/*</DashboardCardSlicerLeft>*/}
        <DashboardCardSlicerMiddle>
          <DashboardCardTitle title={title} />
          <DashboardCardSubtitle subtitle={subtitle}>
            {/*{info1 && <DashboardCardInfo1 info1={info1} />}*/}
          </DashboardCardSubtitle>
          {/*<DashboardCardDetails property={translations.translate('assessmentProperties', 'createdDate')} value={renderDate(createdDate)} />*/}
          {/*TODO: Details, etc..*/}
        </DashboardCardSlicerMiddle>
      </DashboardCardSlicer>
      <DashboardCardAction>
        <DashboardCardActionRight>
          <FlatButton label="Details" secondary />
        </DashboardCardActionRight>
      </DashboardCardAction>
    </div>
  </DashboardCard>;


AssessmentsViewItem.propTypes = {
  // assessmentClickHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  createdDate: PropTypes.string.isRequired,
//  properties...
};

export default AssessmentsViewItem;

