import { Table } from 'reactstrap';
import { pure } from 'recompose';
import { arrayOf } from 'prop-types';

import { issuerType } from 'src/prop-types';

import Issuer from './Issuer';

const propTypes = {
  issuers: arrayOf(issuerType).isRequired,
};

const enhance = pure;

const IssuerList = ({
  issuers,
}) => (
  <Table striped>
    <tbody>
      {issuers.map(({
        id,
        name,
        clients,
      }) => (
        <Issuer
          key={id}
          {...{
            id,
            name,
            clients,
          }}
        />
      ))}
    </tbody>
  </Table>
);

IssuerList.propTypes = propTypes;

export default enhance(IssuerList);
