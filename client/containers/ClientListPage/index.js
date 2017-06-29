import enhance from './enhance';
import List from './List';

const ClientListPage = ({ clients }) => (
  <div>
    {console.log(clients)}
    <List clients={clients} />
  </div>
);

export default enhance(ClientListPage);
