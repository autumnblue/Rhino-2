import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');

const DashboardCardSlicerLeft = ({ children, style = {} }) =>
  <div className={bem.el('slicer').el('left')} style={style} >
    {children}
  </div>;


DashboardCardSlicerLeft.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default DashboardCardSlicerLeft;
