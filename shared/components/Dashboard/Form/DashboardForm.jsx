import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardForm');


const DashboardForm = ({ children }) =>
  <div className={bem}>
    <div className={bem.el('center')}>{children}</div>
  </div>;


DashboardForm.propTypes = {
  children: PropTypes.node,
};

export default DashboardForm;
