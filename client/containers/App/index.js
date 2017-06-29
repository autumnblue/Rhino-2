import PlacesBusinessCenter from 'material-ui/svg-icons/places/business-center';
import makeBem from 'bem-cx';
import { DashboardMenu, DashboardContent } from 'client/components'
import enhance from './enhance';

const menu = [
  { id: 1, text: 'Clients', path: '/clients/list', icon: PlacesBusinessCenter },
  { id: 2, text: 'Assessments', path: '/assessments', icon: PlacesBusinessCenter },
  { id: 3, text: 'Services', path: '/services', icon: PlacesBusinessCenter },
  { id: 4, text: 'Log out', path: '/logout', icon: PlacesBusinessCenter },
];

const bem = makeBem('djavanDashboard');

const App = ({
  children,
  location
}) => (
  <div className={bem}>
    <DashboardMenu menu={menu} location={location}/>
    <DashboardContent>{children}</DashboardContent>
  </div>
);

export default enhance(App);
