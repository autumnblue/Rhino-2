import React, { PropTypes } from 'react';
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
