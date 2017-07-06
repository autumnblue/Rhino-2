import BodyClassName from 'react-body-classname';
import { element, string } from 'prop-types';
import enhance from './enhance';
import Menu from './Menu';

const propTypes = {
  children: element.isRequired,
  activeCategory: string.isRequired,
};

const App = ({
  children,
  activeCategory,
}) => (
  <div>
    <BodyClassName className="site-menubar-unfold" />
    <Menu activeCategory={activeCategory} />
    <div>
      {children}
    </div>
  </div>
);

App.propTypes = propTypes;

export default enhance(App);
