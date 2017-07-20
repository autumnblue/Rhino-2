import { pure } from 'recompose';
import { Link } from 'react-router';
import { number, string, arrayOf } from 'prop-types';
import { Icon, Button } from 'src/components';

import css from './style.css';

const propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  clients: arrayOf(number).isRequired,
};


const enhance = pure;

const Issuer = ({
  id,
  name,
  clients,
}) => (
  <tr key={id}>
    <td>
      {name}
    </td>
    <td>
      {clients.length}&nbsp;Clients
    </td>
    <td className={css.lastCell}>
      <Link to={`/issuers/${id}`}>
        <Button color="primary" outline className="btn-floating">
          <Icon wb="arrow-right" />
        </Button>
      </Link>
    </td>
  </tr>
);

Issuer.propTypes = propTypes;

export default enhance(Issuer);
