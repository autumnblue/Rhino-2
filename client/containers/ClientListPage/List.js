import { push } from 'react-router-redux';

const List = ({ clients }) => (
  <pre>
    This will be a client list:<br />
    {JSON.stringify(clients, null, '\t')}
  </pre>
);

export default List;
