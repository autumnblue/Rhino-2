import BodyClassName from 'react-body-classname';
import { element, string, func } from 'prop-types';
import enhance from './enhance';
import Menu from './Menu';

const propTypes = {
  children: element.isRequired,
  activeCategory: string.isRequired,

  onLogoutRequest: func.isRequired,
};

const App = ({
  children,
  activeCategory,

  onLogoutRequest,
}) => (
  <div>
    <BodyClassName className="site-menubar-unfold" />
    <Menu activeCategory={activeCategory} onLogoutRequest={onLogoutRequest} />
    <div>
      {children}
    </div>
  </div>
);

App.propTypes = propTypes;

export default enhance(App);
