import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class NotificationModal extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
  }

  state = {
    open: true,
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
    window.location = location;
  }

  render() {
    const actions = [
      <FlatButton
        label="Click to refresh page"
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
