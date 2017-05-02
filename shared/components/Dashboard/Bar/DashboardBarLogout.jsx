import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const DashboardBarLogout = ({ logOut }) =>
  <div className="dashboardBarAvatar" style={{ marginTop: '15px' }}>
    <RaisedButton primary label="Logout" onTouchTap={logOut} />
  </div>;

DashboardBarLogout.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default DashboardBarLogout;
