import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DashboardCard from '../../Dashboard/Card/DashboardCard';
import DashboardCardTitle from '../../Dashboard/Card/DashboardCardTitle';
import DashboardCardAction from '../../Dashboard/Card/DashboardCardAction';
import DashboardCardActionRight from '../../Dashboard/Card/DashboardCardActionRight';
import DashboardCardSlicer from '../../Dashboard/Card/DashboardCardSlicer';
import DashboardCardSlicerLeft from '../../Dashboard/Card/DashboardCardSlicerLeft';
import DashboardCardSlicerMiddle from '../../Dashboard/Card/DashboardCardSlicerMiddle';
import DashboardCardSlicerRight from '../../Dashboard/Card/DashboardCardSlicerRight';
import DashboardCardInfo from '../../Dashboard/Card/DashboardCardInfo';
// import DashboardCardActionLeft from '../../Dashboard/Card/DashboardCardActionLeft';
// import DashboardCardSubtitle from '../../Dashboard/Card/DashboardCardSubtitle';
// import DashboardCardDetails from '../../Dashboard/Card/DashboardCardDetails';

const bem = makeBem('clients');

const ClientsViewItem = ({
  //clientClickHandler,
  focal_phone, //z
  short_name,  //x
  issuer: { //x
    // id,
    // name,
  },
  url,//z
  notes,
  focal_title, //z
  project_manager,
// : { //z
    // username,
    // first_name,
    // last_name,
    // is_active,
    // email,
    // id,
  // },
  focal_name, //z
  service_order_count, //z
  address, //z
  focal_email, //z
  assessment_count, //z
  hourly_rate, //z
  id, //z
  name, //z
//  properties...
}) =>
<div>
  <DashboardCard>
    {/*//clickHandler={() => clientClickHandler(id, title)}>*/}
    <div className={bem.mod({ interactive: true })}>
      <DashboardCardSlicer>
        <DashboardCardSlicerLeft>
          <FloatingActionButton disabled disabledColor="#bbdefb" >
            <DashboardCardInfo type="vuln" info={service_order_count} />
          </FloatingActionButton>
          <DashboardCardInfo type="countlabel" info="Service"><DashboardCardInfo type="countlabel" info="Orders"></DashboardCardInfo></DashboardCardInfo>

          <br />
          <FloatingActionButton disabled disabledColor="#c8e6c9" >
            <DashboardCardInfo type="vuln" info={assessment_count} />
          </FloatingActionButton>
          <DashboardCardInfo type="countlabel" info="Assessments" />
        </DashboardCardSlicerLeft>
        <DashboardCardSlicerMiddle>
          <DashboardCardTitle title={name} />
          {(focal_name && focal_title) && <DashboardCardInfo type="clientname" info={focal_name + ": " + focal_title} />}
          {(focal_name && !focal_title) && <DashboardCardInfo type="clientname" info={focal_name} /> }
          {url && <DashboardCardInfo type="clientinfo" info={url} /> }
          {focal_email && <DashboardCardInfo type="clientinfo" info={focal_email} /> }
          {focal_phone && <DashboardCardInfo type="clientinfo" info={focal_phone} /> }
          {address && <DashboardCardInfo type="clientinfosmall" info={address} /> }
          {/*<DashboardCardDetails> Details </DashboardCardDetails> /!*render created*!/*/}
          {/*TODO: Details, etc..*/}
        </DashboardCardSlicerMiddle>
        <DashboardCardSlicerRight>
          {id && <DashboardCardInfo type="id" info={"ID: " + id} />}
          <br />
          {hourly_rate && <DashboardCardInfo type="vuln" info={"Rate: " + hourly_rate} /> }
          <br />
          {(project_manager && project_manager.first_name && project_manager.last_name) && <DashboardCardInfo type="manager" info={project_manager.first_name + " " + project_manager.last_name} />}
        </DashboardCardSlicerRight>
      </DashboardCardSlicer>
      <DashboardCardAction>
        {/*<DashboardCardActionLeft>*/}
          {/**/}
        {/*</DashboardCardActionLeft>*/}
        <DashboardCardActionRight>
          <FlatButton label="Edit" backgroundColor="#c8e6c9" secondary/>

          <FlatButton label="Delete" backgroundColor="#f44336" secondary />
        </DashboardCardActionRight>
      </DashboardCardAction>
    </div>
  </DashboardCard>
</div>;


ClientsViewItem.propTypes = {
  // clientClickHandler: PropTypes.func.isRequired,

  focal_phone: PropTypes.string,
  short_name: PropTypes.string,
  issuer: PropTypes.object,
  // issuer: PropTypes.shape({
  //   id: PropTypes.number,
  //   name: PropTypes.string,
  // }),
  url: PropTypes.string,
  notes: PropTypes.string,
  focal_title: PropTypes.string,
  project_manager: PropTypes.object,
  // project_manager: PropTypes.shape({
  //   username: PropTypes.string,
  //   first_name: PropTypes.string,
  //   last_name: PropTypes.string,
  //   is_active: PropTypes.boolean,
  //   email: PropTypes.string,
  //   id: PropTypes.number,
  // }),
  focal_name: PropTypes.string,
  service_order_count: PropTypes.number,
  address: PropTypes.string,
  focal_email: PropTypes.string,
  assessment_count: PropTypes.number,
  hourly_rate: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
//  properties...
};

export default ClientsViewItem;

