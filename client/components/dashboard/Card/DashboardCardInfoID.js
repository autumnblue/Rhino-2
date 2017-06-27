import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';

const bem = makeBem('djavanDashboardCard');

const DashboardCardInfoID = ({ id, children, onClick }) =>
  <div className={bem.el('info')}>
    <div onClick={onClick} className={bem.el('info').el('id').mod({ link: !!onClick })}>{id}</div>
    {children}
  </div>;


DashboardCardInfoID.propTypes = {
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default DashboardCardInfoID;
