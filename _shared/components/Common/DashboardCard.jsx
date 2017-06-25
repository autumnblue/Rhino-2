import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';

const DashboardCard = ({ className, clickHandler, children }) =>
    <Card className={className} onClick={clickHandler}>
      {children}
    </Card>;

DashboardCard.propTypes = {
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default DashboardCard;
