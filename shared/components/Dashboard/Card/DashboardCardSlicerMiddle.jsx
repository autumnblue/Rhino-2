import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');


const DashboardCardSlicerMiddle = ({ children, style = {} }) =>
  <div className={bem.el('slicer').el('middle')} style={style} >
    {children}
  </div>;


DashboardCardSlicerMiddle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default DashboardCardSlicerMiddle;
