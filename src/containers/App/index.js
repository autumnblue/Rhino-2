import BodyClassName from 'react-body-classname';
import enhance from './enhance';
import Menu from './Menu';

const menu = [
  { id: 1, text: 'Clients', path: '/clients/list' },
  { id: 2, text: 'Assessments', path: '/assessments' },
  { id: 3, text: 'Services', path: '/services' },
  { id: 4, text: 'Log out', path: '/logout' },
];

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

export default enhance(App);
