import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Actions from '../../actions/error';

const mapStateToProps = (state) => state.error;

const mapDispatchToProps = (dispatch) => ({
  dismiss: () => dispatch(Actions.dismiss())
})

class Error extends Component {

  handleClose = () => {
    this.props.dismiss();
  };

  render() {
    const actions = [
      <RaisedButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.props.show}
        onRequestClose={this.handleClose}
      >
        Error occurred: {this.props.message}
      </Dialog>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Error);
