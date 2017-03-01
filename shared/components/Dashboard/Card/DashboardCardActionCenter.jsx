import React, { PropTypes } from 'react';
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
