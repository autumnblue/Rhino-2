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
  location,
}) => (
  <div>
    <BodyClassName className="site-menubar-unfold" />
    {/*<DashboardMenu menu={menu} location={location} />*/}
    <Menu />
    <div className="page">{children}</div>
  </div>
);

export default enhance(App);
