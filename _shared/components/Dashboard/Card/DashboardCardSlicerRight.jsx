import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');

const DashboardCardSlicerRight = ({ children, style = {} }) =>
  <div className={bem.el('slicer').el('right')} style={style} >
    {children}
  </div>;


DashboardCardSlicerRight.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default DashboardCardSlicerRight;
