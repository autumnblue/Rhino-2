import enhance from './enhance';
import List from './List';

const ClientListPage = ({ clients }) => (
  <div>
    <List clients={clients} />
  </div>
);

export default enhance(ClientListPage);
