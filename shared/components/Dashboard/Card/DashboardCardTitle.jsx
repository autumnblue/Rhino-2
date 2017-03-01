import React, { PropTypes } from 'react';
import { CardTitle } from 'material-ui/Card';
import { djavanTheme } from '../../../constants/djavanTheme';


const DashboardCardTitle = ({ title }) =>
  <CardTitle title={title} style={djavanTheme.card.titleStyle} />;


DashboardCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashboardCardTitle;
