import React, { PropTypes } from 'react';
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
