import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import { Card, CardText } from 'material-ui/Card';

const bem = makeBem('djavanDashboardCard');


const DashboardCard = ({ clickHandler, children }) =>
    <Card className={bem} onClick={clickHandler}>
      <CardText>{children}</CardText>
    </Card>;

DashboardCard.propTypes = {
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default DashboardCard;
