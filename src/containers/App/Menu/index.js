import { Link } from 'react-router';
import { string, func } from 'prop-types';

import { Icon } from 'src/components';

import css from './style.css';

const propTypes = {
  activeCategory: string.isRequired,

  onLogoutRequest: func.isRequired,
};

const menuItems = [{
  label: 'Clients',
  url: '/clients',
  wbIcon: 'users',
  category: 'clients',
}, {
  label: 'Document Templates',
  url: '/document-templates',
  faIcon: 'file-text',
  category: 'document-templates',
}, {
  label: 'Service Orders',
  url: '/service-orders',
  faIcon: 'magic',
  category: 'service-orders',
}, {
  label: 'Settings & Assets',
  url: '/settings',
  wbIcon: 'settings',
  category: 'settings',
}];

const Menu = ({
  activeCategory,

  onLogoutRequest,
}) => (
  <div className={`site-menubar ${css.menu}`}>
    <div className="site-menubar-body scrollable scrollable-inverse scrollable-vertical is-disabled" style={{ position: 'relative' }}>
      <div className="scrollable-container">
        <div className="scrollable-content">
          <ul className="site-menu">
            <li className="site-menu-category">Djavan</li>
            {menuItems.map(({ label, url, category, faIcon, wbIcon }) => (
              <li key={url} className={`site-menu-item ${activeCategory === category ? css.active : ''}`}>
                <Link to={url}>
                  <Icon wb={wbIcon} fa={faIcon} className="site-menu-icon" />
                  <span className="site-menu-title">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="scrollable-bar scrollable-bar-vertical scrollable-bar-hide" draggable="false"><div className="scrollable-bar-handle" style={{ height: '805.792px' }} /></div></div>
    <div className="site-menubar-footer">
      <a onClick={onLogoutRequest} title="Logout" className={css.logout}>
        <span className="icon wb-power" aria-hidden="true" />
      </a>
    </div>
  </div>
);

Menu.propTypes = propTypes;

export default Menu;
