import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import makeBem from 'bem-cx';
import { ListItem } from 'material-ui/List';

const bem = makeBem('djavanDashboardMenu');

const DashboardMenuItem = ({ menuItem, itemStyle, icon }) =>
  <Link to={menuItem.path} className={bem.el('link')}>
    <ListItem
      key={menuItem.text}
      primaryText={menuItem.text}
      innerDivStyle={itemStyle}
      leftIcon={icon}
    />
  </Link>;


DashboardMenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
  itemStyle: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
};

export default DashboardMenuItem;
