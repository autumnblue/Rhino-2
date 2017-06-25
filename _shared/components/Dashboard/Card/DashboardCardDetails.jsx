import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import _ from 'lodash';

const bem = makeBem('djavanDashboardCard');

const DashboardCardDetails = ({ property, value, long }) =>
  <div className={bem.el('details')}>
    <span className={bem.el('details').el('property').mod({ long: !!long })}>{property}</span>
    <span className={bem.el('details').el('value')}>{value}</span>
  </div>;

DashboardCardDetails.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.array.isRequired,
  ]).isRequired,
  long: PropTypes.bool,
};

export default DashboardCardDetails;
