import { Link } from 'react-router';

import css from './style.css';

const Nav = ({
  activeCategory,
}) => (
  <div className="site-menubar" style={{ top: 0 }}>
    <div className="site-menubar-body scrollable scrollable-inverse scrollable-vertical is-disabled" style={{ position: 'relative' }}>
      <div className="scrollable-container">
        <div className="scrollable-content">
          <ul className="site-menu">
            <li className="site-menu-category">Djavan</li>
            <li className={`site-menu-item ${activeCategory === 'clients' ? css.active : ''}`}>
              <Link to="/clients">
                <i className="site-menu-icon wb-user" />
                <span className="site-menu-title">Clients</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="scrollable-bar scrollable-bar-vertical scrollable-bar-hide" draggable="false"><div className="scrollable-bar-handle" style={{ height: '805.792px' }} /></div></div>
    <div className="site-menubar-footer">
      <a href="javascript: alert('to be implemented');" title="Logout" className={css.logout}>
        <span className="icon wb-power" aria-hidden="true" />
      </a>
    </div>
  </div>


);

export default Nav;
