import { Link } from 'react-router';
import { string, func } from 'prop-types';

import { Icon } from 'src/components';

import css from './style.css';

const propTypes = {
  activeCategory: string.isRequired,

  onLogoutRequest: func.isRequired,
};

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
            <li className={`site-menu-item ${activeCategory === 'clients' ? css.active : ''}`}>
              <Link to="/clients">
                <Icon wb="user" className="site-menu-icon" />
                <span className="site-menu-title">Clients</span>
              </Link>
            </li>
            <li className={`site-menu-item ${activeCategory === 'settings' ? css.active : ''}`}>
              <Link to="/settings">
                <Icon wb="settings" className="site-menu-icon" />
                <span className="site-menu-title">Settings &amp; Assets</span>
              </Link>
            </li>
            <li className={`site-menu-item ${activeCategory === 'services' ? css.active : ''}`}>
              <Link to="/services">
                <i className="site-menu-icon wb-user" />
                <span className="site-menu-title">Services</span>
              </Link>
            </li>
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
