import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
// import RaisedButton from 'material-ui/RaisedButton';

const bem = makeBem('Clients');

const ClientsEmptyView = ({ profileClickHandler }) =>
  <div className={bem.el('empty')}>
    <p>
      No Clients
    </p>
    {/*<RaisedButton label="Go to new client" primary onTouchTap={clientClickHandler} />*/}
  </div>;


ClientsEmptyView.propTypes = {
  // clientClickHandler: PropTypes.func.isRequired,
};

export default ClientsEmptyView;
