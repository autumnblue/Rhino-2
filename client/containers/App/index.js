import enhance from './enhance';

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
    {/*<DashboardMenu menu={menu} location={location} />*/}
    <div>{children}</div>
  </div>
);

export default enhance(App);
