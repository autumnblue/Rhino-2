import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');


const DashboardCardSlicer = ({ children, style = {} }) =>
  <div className={bem.el('slicer')} style={style} >
    {children}
  </div>;


DashboardCardSlicer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default DashboardCardSlicer;
