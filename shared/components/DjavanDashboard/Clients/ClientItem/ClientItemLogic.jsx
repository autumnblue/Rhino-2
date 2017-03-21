import React, { Component, PropTypes } from 'react';
import ClientItemView from './ClientItemView';
import _ from 'lodash';
// import DashboardCardActionLeft from '../../Dashboard/Card/DashboardCardActionLeft';
// import DashboardCardSubtitle from '../../Dashboard/Card/DashboardCardSubtitle';
// import DashboardCardDetails from '../../Dashboard/Card/DashboardCardDetails';



export default class ClientItemLogic extends Component {

  static propTypes = {
    // clientClickHandler: PropTypes.func.isRequired,\
    clientItemObject: PropTypes.object,
    clientItem: PropTypes.shape({
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
      umbrella: PropTypes.node,
      departments: PropTypes.array,
    }),
    updateClient: PropTypes.func.isRequired,
    possibleUmbrellas: PropTypes.array.isRequired,
//  properties...
  };

  state = {
    showMore: false,
    possibleUmbrellasWithoutThis: [],
  };

  componentWillMount() {
    this.updatePossibleUmbrellas(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updatePossibleUmbrellas(nextProps);
  }

  componentWillUnmount() {
    // this.props.refreshClientsList();
  }

  toggleMore = () => {
    // console.log(this.state.showMore);
    this.setState((prevState) => ({ showMore: !prevState.showMore }))
    // console.log(this.state.showMore);
  };

  updatePossibleUmbrellas(props = this.props) {
    if (props.possibleUmbrellas && props.clientItem)
    {
      const clientId = props.clientItem.id;
      // console.log(clientId);
      const uniqueUmbrellas = props.possibleUmbrellas.map((umbrella) => {return Object.assign({}, (umbrella.id != clientId) ?  umbrella : null )});
      // console.log(uniqueUmbrellas);
      this.setState({possibleUmbrellasWithoutThis: uniqueUmbrellas});
    }
  }

  updateField = (event, name, id, clientItemObject) => {
    this.props.updateClient(id, {field: "name", value: event.target.value, clientitem: clientItemObject})
  }



// };

  //
  // handleModalClose = () => {
  //   this.setState({
  //     imgModal: false
  //   })
  // };
  //
  // changeExpand = () => {
  //   const {expandFirstCard} = this.state;
  //   this.setState({
  //     expandFirstCard: !expandFirstCard
  //   })
  // };
  //
  // changeInput = (inputName, ev) => {
  //   let {fieldsToValidate, invalidFields} = this.state;
  //   let {value} = ev.target;
  //   const invalid = inputName === 'email'
  //     ? (!emailRegex.test(value) || value.length === 0) && fieldsToValidate.includes(inputName)
  //     : value.length === 0 && fieldsToValidate.includes(inputName);
  //   if (invalid) {
  //     !_.find(fieldsToValidate, inputName) && invalidFields.push(inputName);
  //   }
  //   else {
  //     invalidFields = _.remove(invalidFields, (field) => {
  //       return field !== inputName;
  //     });
  //   }
  //   const newState = _.set(this.state.clientData, inputName, value);
  //   this.setState({clientData: newState, invalidFields});
  // };
  //
  // checkValidation = (fieldName, ifDataValid, ifDataInvalid) => {
  //   const {invalidFields} = this.state;
  //   if (fieldName === 'email') {
  //     return _.includes(invalidFields, fieldName)
  //       ? 'Email is not valid!!'
  //       : ifDataValid
  //   }
  //   else {
  //     return _.includes(invalidFields, fieldName)
  //       ? ifDataInvalid
  //       : ifDataValid
  //   }
  // };
  //
  // openImgModal = () => {
  //   this.setState({
  //     imgModal: true
  //   })
  // };
  //
  // toggleEditImg = () => {
  //   const {editImg} = this.state;
  //   this.setState({
  //     editImg: !editImg
  //   });
  // };
  //
  // removeImg = (inputName) => {
  //   const newState = _.set(this.state.clientData, inputName, '');
  //   this.setState({clientData: newState});
  // };
  //
  // cropImg = (inputName, index, data) => {
  //   const newState = _.set(this.state.clientData, inputName, data);
  //   this.setState({clientData: newState});
  //   this.toggleEditImg();
  // };
  //
  // showSaveSection = () => {
  //   const {clientId} = this.state;
  //   return (
  //     <div className="col-xs-12 col-sm-10">
  //       <div className="col-sm-9">
  //         <RaisedButton label={!!clientId ? 'Update' : 'Create'}
  //                       onClick={this.saveDataToServer.bind(this)}
  //                       labelPosition="before"
  //                       containerElement="label"
  //                       backgroundColor='#5CB85C'
  //                       labelColor="white"
  //                       style={inputStyles.buttons}/>
  //       </div>
  //     </div>
  //   )
  // };
  //
  // uploadFileFromClipboard = (inputName, ev) => {
  //   const images = (ev.clipboardData || ev.originalEvent.clipboardData).items;
  //   let blob = null;
  //   _.forEach(images, (img) => {
  //     if (img.type.indexOf("image") === 0) {
  //       blob = img.getAsFile();
  //     }
  //   });
  //   if (blob !== null) {
  //     let reader = new FileReader();
  //     reader.onload = (event) => {
  //       const resImg = this.compressImage(event.target.result);
  //       const newState = _.set(this.state.clientData, inputName, resImg);
  //       this.setState({clientData: newState});
  //       this.handleModalClose();
  //     };
  //     reader.readAsDataURL(blob);
  //   }
  //   else {
  //     alert('You must paste an image from clipboard!');
  //   }
  // };
  //
  // uploadFile = (inputName, ev) => {
  //   const {files} = ev.target;
  //   _.map(files, (file) => {
  //     let reader = new FileReader();
  //     reader.onloadend = ((res) => {
  //       const resImg = this.compressImage(res.currentTarget.result);
  //       const newState = _.set(this.state.clientData, inputName, resImg);
  //       this.setState({clientData: newState});
  //     });
  //     reader.readAsDataURL(file);
  //   });
  //   this.handleModalClose();
  // };
  //
  // compressImage = (image) => {
  //   let quality = 80;
  //   let output_format = 'jpg';
  //   let final = document.createElement('img');
  //   final.src = image;
  //   return jic.compress(final, quality, output_format).src;
  // };
  //
  // changeInputNum = (inputName, ev) => {
  //   let {fieldsToValidate, invalidFields} = this.state;
  //   let {value} = ev.target;
  //   const invalid = value.length === 0 && fieldsToValidate.includes(inputName);
  //   if (invalid) {
  //     !_.find(fieldsToValidate, inputName) && invalidFields.push(inputName);
  //   }
  //   else {
  //     invalidFields = _.remove(invalidFields, (field) => {
  //       return field !== inputName;
  //     });
  //   }
  //   const newState = _.set(this.state.clientData, inputName, parseInt(value));
  //   this.setState({clientData: newState, invalidFields});
  // };


  render() {
    return <ClientItemView {...this} />;
  };
}
