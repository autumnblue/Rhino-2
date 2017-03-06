import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');


const DashboardCardInfo = ({ type, info, children, onClick }) =>
  <div className={bem.el('info')}>
    <div onClick={onClick} className={bem.el('info').el(type).mod({ link: !!onClick })}>{info}</div>
    {children}
  </div>;


DashboardCardInfo.propTypes = {
  type: PropTypes.string.isRequired,
  info: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default DashboardCardInfo;
