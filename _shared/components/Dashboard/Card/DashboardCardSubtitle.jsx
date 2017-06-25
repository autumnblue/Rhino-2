import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');

const DashboardCardSubtitle = ({ subtitle, children, onClick }) =>
  <div className={bem.el('subtitle')}>
    <div onClick={onClick} className={bem.el('subtitle').el('clientName').mod({ link: !!onClick })}>{subtitle}</div>
    {children}
  </div>;


DashboardCardSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default DashboardCardSubtitle;
