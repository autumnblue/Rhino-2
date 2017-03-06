import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import { Card, CardText } from 'material-ui/Card';
import Badge from 'material-ui/Badge'

const bem = makeBem('djavanDashboardCard');


const DashboardCardWithCount = ({ clickHandler, children, badge }) =>
  <Badge badgeContent={badge} >
    <Card className={bem} onClick={clickHandler}>
      <CardText>{children}</CardText>
    </Card>
  </Badge>;




DashboardCardWithCount.propTypes = {
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default DashboardCardWithCount;
