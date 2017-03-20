import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class NotificationModal extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    clearError: PropTypes.function,
  }

  state = {
    open: true,
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
    this.props.clearError();
    // window.location = location;
  }

  render() {
    const actions = [
      <FlatButton
        label="Close window"
        secondary
        onTouchTap={this.handleRequestClose}
      />,
    ];

    return (
      <Dialog
        title="Notification"
        actions={actions}
        open={this.state.open}
        modal
      >
        {this.props.message}
      </Dialog>
    );
  }
}
