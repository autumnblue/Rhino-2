import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AutoComplete from 'material-ui/AutoComplete';
import DashboardCard from '../../../Dashboard/Card/DashboardCard';
import DashboardCardTitle from '../../../Dashboard/Card/DashboardCardTitle';
import DashboardCardAction from '../../../Dashboard/Card/DashboardCardAction';
import DashboardCardActionRight from '../../../Dashboard/Card/DashboardCardActionRight';
import DashboardCardSlicer from '../../../Dashboard/Card/DashboardCardSlicer';
import DashboardCardSlicerLeft from '../../../Dashboard/Card/DashboardCardSlicerLeft';
import DashboardCardSlicerMiddle from '../../../Dashboard/Card/DashboardCardSlicerMiddle';
import DashboardCardSlicerRight from '../../../Dashboard/Card/DashboardCardSlicerRight';
import DashboardCardInfo from '../../../Dashboard/Card/DashboardCardInfo';
// import DashboardSubCard from '../../../Dashboard/Card/DashboardSubCard';
// import DashboardCardActionLeft from '../../Dashboard/Card/DashboardCardActionLeft';
// import DashboardCardSubtitle from '../../Dashboard/Card/DashboardCardSubtitle';
// import DashboardCardDetails from '../../Dashboard/Card/DashboardCardDetails';

const bem = makeBem('clients');

const ClientItemView = ({
  props:{
    //clientClickHandler,
    clientItemObject,
    clientItem: {
      focal_phone, //z
      short_name,  //x
      issuer,
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
      umbrella,
      departments,
    },
    updateClient,
    possibleUmbrellas,
    umbrellasStatus,
  },
  state: {
    showMore,
    possibleUmbrellasWithoutThis,
  },
  toggleMore,
  updateField,
}
) =>
      <div>
        <DashboardCard>
          {/*//clickHandler={() => clientClickHandler(id, title)}>*/}
          <div className={bem.mod({ interactive: true })}>
            <DashboardCardSlicer>
              <DashboardCardSlicerLeft>
                <FloatingActionButton disabled disabledColor="#bbdefb" >
                  <DashboardCardInfo type="vuln" info={service_order_count} />
                </FloatingActionButton>
                <DashboardCardInfo type="countlabel" info="Service">
                  <DashboardCardInfo type="countlabel" info="Orders" />
                </DashboardCardInfo>
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
              <DashboardCardActionRight>
                { showMore &&
                <FlatButton label="Close Edit" backgroundColor="#c8e6c9" primary onTouchTap={toggleMore}/>
                }
                { !showMore &&
                <FlatButton label="Edit" backgroundColor="#c8e6c9" secondary onTouchTap={toggleMore}/>
                }
                <FlatButton label="Delete" backgroundColor="#f44336" secondary />
              </DashboardCardActionRight>
            </DashboardCardAction>
            <br />
            { showMore &&
              <DashboardCard>
                <DashboardCardTitle title={"Edit " + name} />
                <DashboardCardSlicer>
                  <DashboardCardSlicerMiddle>
                    <TextField
                      floatingLabelFixed={true}
                      floatingLabelText="Name"
                      hintText="Should be blah blah"
                      fullWidth={true}
                      defaultValue={name}
                      name="name"
                      onBlur={(e) => {updateField(e, name, id, clientItemObject)}} />
                    <AutoComplete
                      floatingLabelFixed={true}
                      floatingLabelText="Parent (Umbrella) Client"
                      hintText="Enter desired umbrella client"
                      openOnFocus={true}
                      dataSource={possibleUmbrellasWithoutThis}
                      filter={AutoComplete.fuzzyFilter}
                      dataSourceConfig={{ value: 'id', text: 'name',}}
                      menuStyle = {{maxHeight:"300px"}} />
                  </DashboardCardSlicerMiddle>
                </DashboardCardSlicer>
              </DashboardCard>
            }
          </div>

        </DashboardCard>
      </div>;

export default ClientItemView;

//
//
// <Dialog title="Image upload"
//         actions={actions}
//         modal={false}
//         open={imgModal}
//         onRequestClose={this.handleModalClose.bind(this)}>
//   <div className="textUpload">
//     <TextField onPaste={this.uploadFileFromClipboard.bind(this, 'logo')}
//                floatingLabelText="Paste image here"
//                fullWidth={true}
//                className="edit-text-input"
//                type="text"
//                floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle}
//                underlineFocusStyle={inputStyles.underlineFocusStyle}/>
//   </div>
//   <div className="clickUpload">
//     <RaisedButton label="Select Image"
//                   labelPosition="before"
//                   containerElement="label"
//                   backgroundColor='#5CB85C'
//                   labelColor="white"
//                   style={inputStyles.buttons}>
//       <input className="hidden-file" type="file" accept="image/*"
//              onChange={this.uploadFile.bind(this, 'logo')}/>
//     </RaisedButton>
//   </div>
// </Dialog>
