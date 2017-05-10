import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClientItem from './ClientItem';

export default class ClientsLogic extends Component {

  static propTypes = {
    currentClient: PropTypes.object.isRequired,
    refreshClientsList: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ClientItem clientItem={this.props.currentClient} />
    );
  }
}

ClientsLogic.contextTypes = {
  router: PropTypes.object.isRequired,
};
