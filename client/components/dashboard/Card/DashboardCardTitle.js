import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardTitle } from 'material-ui/Card';
import { djavanTheme } from 'client/legacy/djavanTheme';


const DashboardCardTitle = ({ title }) =>
  <CardTitle title={title} style={djavanTheme.card.titleStyle} />;


DashboardCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashboardCardTitle;
