import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import DashboardCardAction from '../Card/DashboardCardAction';

const bem = makeBem('djavanDashboardFormCard');

const DashboardFormCardAction = ({ children }) =>
  <div className={bem.el('action')}>
    <DashboardCardAction>{children}</DashboardCardAction>
  </div>;


DashboardFormCardAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardFormCardAction;
