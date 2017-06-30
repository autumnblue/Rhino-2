import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardContent');

const DashboardContent = ({ children }) =>
  <div className={bem}>{children}</div>;


DashboardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardContent;
