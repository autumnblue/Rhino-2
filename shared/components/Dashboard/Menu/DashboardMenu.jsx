import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import Drawer from 'material-ui/Drawer';
import { List } from 'material-ui/List';
import DashboardMenuItem from './DashboardMenuItem';
import { djavanTheme } from '../../../constants/djavanTheme';

const bem = makeBem('djavanDashboardMenu');


const DashboardMenu = ({ menu, location }, context) =>
  <Drawer className="djavanDashboardMenu" docked zDepth={0} style={djavanTheme.drawer.style}>
    <div className={bem.el('image')} />
    <List>
      {menu.map((menuItem) => {
        const currentPath = location.pathname;
        const active = currentPath.substring(0, menuItem.path.length) === menuItem.path;
        return (<DashboardMenuItem
          key={menuItem.id}
          menuItem={menuItem}
          itemStyle={djavanTheme.listItem[active ? 'ItemStyleActive' : 'itemStyle']}
          icon={React.createElement(menuItem.icon, djavanTheme.listItem[active ? 'IconStyleActive' : 'iconStyle'])}
        />);
      })}
    </List>
  </Drawer>;


DashboardMenu.propTypes = {
  menu: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

DashboardMenu.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default DashboardMenu;
