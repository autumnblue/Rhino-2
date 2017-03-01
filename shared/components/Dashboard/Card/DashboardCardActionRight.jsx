import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');


const DashboardCardActionRight = ({ children }) =>
  <div className={bem.el('action').mod({ right: true })}>
    {children}
  </div>;


DashboardCardActionRight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardCardActionRight;
