import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');

const DashboardCardActionCenter = ({ children }) =>
  <div className={bem.el('action').mod({ center: true })}>
    {children}
  </div>;


DashboardCardActionCenter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardCardActionCenter;
