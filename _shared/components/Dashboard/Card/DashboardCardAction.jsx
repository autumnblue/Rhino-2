import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');

const DashboardCardAction = ({ children }) =>
  <div className={bem.el('action')}>
    {children}
  </div>;


DashboardCardAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardCardAction;
