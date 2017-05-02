import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DashboardCardWithCount from '../../Dashboard/Card/DashboardCardWithCount';
import DashboardCardTitle from '../../Dashboard/Card/DashboardCardTitle';
// import DashboardCardSubtitle from '../../Dashboard/Card/DashboardCardSubtitle';
// import DashboardCardDetails from '../../Dashboard/Card/DashboardCardDetails';
import DashboardCardAction from '../../Dashboard/Card/DashboardCardAction';
import DashboardCardActionRight from '../../Dashboard/Card/DashboardCardActionRight';
// import DashboardCardActionLeft from '../../Dashboard/Card/DashboardCardActionLeft';
import DashboardCardSlicer from '../../Dashboard/Card/DashboardCardSlicer';
import DashboardCardSlicerLeft from '../../Dashboard/Card/DashboardCardSlicerLeft';
import DashboardCardSlicerMiddle from '../../Dashboard/Card/DashboardCardSlicerMiddle';
import DashboardCardSlicerRight from '../../Dashboard/Card/DashboardCardSlicerRight';
import DashboardCardInfo from '../../Dashboard/Card/DashboardCardInfo';

const bem = makeBem('assessments');

const AssessmentsViewItem = ({
  //assessmentClickHandler,
  project_manager,
  raw_html,
  created,
  soceng_finding,
  webapp_finding,
  network_finding,
  id,
//  properties...
}) =>
  <DashboardCardWithCount badge="30">
    {/*//clickHandler={() => assessmentClickHandler(id, title)}>*/}
    <div className={bem.mod({ interactive: true })}>
      <DashboardCardSlicer>
        <DashboardCardSlicerLeft>
          <FloatingActionButton disabled disabledColor="#ffebee" >
            <DashboardCardInfo type="vuln" info="3" />
          </FloatingActionButton>
        </DashboardCardSlicerLeft>
        <DashboardCardSlicerMiddle>
          <DashboardCardTitle title="Musashi Interstellar Spaceflight Concern Musashi Interstellar Spaceflight" />
          {project_manager && <DashboardCardInfo type="user" info={project_manager.username} />}
          {/*<DashboardCardDetails> Details </DashboardCardDetails> /!*render created*!/*/}
          {/*TODO: Details, etc..*/}
        </DashboardCardSlicerMiddle>
        <DashboardCardSlicerRight>
          <DashboardCardInfo type="id" info="10-26-16-Mus-135" />
          <br />
          {!!soceng_finding && <DashboardCardInfo type="soceng" info="Social Engineering" />}
          {!!webapp_finding && <DashboardCardInfo type="webapp" info="Web Application" />}
          {!!network_finding && <DashboardCardInfo type="network" info="Network" />}
          {/*<DashboardCardInfo type="soceng" info="Social Engineering" />*/}
          {/*<DashboardCardInfo type="webapp" info="Web Application" />*/}
          {/*<DashboardCardInfo type="network" info="Network" />*/}
          <DashboardCardInfo type="pentest" info="Penetration Test" />
        </DashboardCardSlicerRight>
      </DashboardCardSlicer>
      <DashboardCardAction>
        {/*<DashboardCardActionLeft>*/}
          {/**/}
        {/*</DashboardCardActionLeft>*/}
        <DashboardCardActionRight>
          <FlatButton label="Edit" backgroundColor="#c8e6c9" secondary/>

          <FlatButton label="Download" backgroundColor="#bbdefb" secondary />

          <FlatButton label="Clone" backgroundColor="#e1bee7" secondary />

          <FlatButton label="Export CSV" backgroundColor="#ffecb3" secondary />

          <FlatButton label="Export PDF" backgroundColor="#ffcdd2" secondary />
        </DashboardCardActionRight>
      </DashboardCardAction>
    </div>
  </DashboardCardWithCount>;


AssessmentsViewItem.propTypes = {
  // assessmentClickHandler: PropTypes.func.isRequired,
  project_manager: PropTypes.object,
  raw_html: PropTypes.string,
  created: PropTypes.string,
  id: PropTypes.number,
  soceng_finding: PropTypes.object,
  webapp_finding: PropTypes.object,
  network_finding: PropTypes.object,
//  properties...
};

export default AssessmentsViewItem;

//
//
// <DashboardCard >
//   {/*//clickHandler={() => assessmentClickHandler(id, title)}>*/}
//   <div className={bem.mod({ interactive: true })}>
//     <DashboardCardSlicer>
//       {/*<DashboardCardSlicerLeft>*/}
//       {/*<div>*/}
//       {/*{previewImage && <img src={previewImage} alt="" />}*/}
//       {/*</div>*/}
//       {/*</DashboardCardSlicerLeft>*/}
//       <DashboardCardSlicerMiddle>
//
//         {project_manager && <DashboardCardTitle title={project_manager.username} /> }
//         {project_manager && <DashboardCardSubtitle subtitle={project_manager.first_name} /> }
//         {/*{raw_html && <DashboardCardInfo info={raw_html} />}*/}
//         {/*{project_manager && </DashboardCardSubtitle> }*/}
//         {/*<DashboardCardDetails property={created} value={created} /> /!*render created*!/*/}
//         {/*TODO: Details, etc..*/}
//       </DashboardCardSlicerMiddle>
//     </DashboardCardSlicer>
//     <DashboardCardAction>
//       <DashboardCardActionRight>
//         <FlatButton label="Details" secondary />
//       </DashboardCardActionRight>
//     </DashboardCardAction>
//   </div>
// </DashboardCard>;
//

