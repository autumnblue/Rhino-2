import { Link } from 'react-router';
import { Table } from 'reactstrap';
import { arrayOf } from 'prop-types';

import { Button } from 'src/components';
import { clientType } from 'src/prop-types';

const propTypes = {
  services: arrayOf(clientType).isRequired,
};

const List = ({ services }) => (
  <Table striped>
    <tbody>
      {services.map(({
        id,
        name,
        default_sort_priority,
        description,
        engagement_type,
        engagement_type_description,
        entity_type,
        feature_image,
        html_body,
        remediation_ordered,
        remediation_text,
        tools,
      }) => (
        <tr key={id}>
          <td>
            {default_sort_priority}
          </td>
          <td>
            {name}
            <br /><br />
            {tools.length} tools
          </td>
          <td>
            {feature_image ? <img src={feature_image.file} /> : null}
          </td>
          <td>
            {description}
          </td>
          <td>
            <Link to={`/services/${id}`}>
              <Button color="primary" outline>&rarr;</Button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

List.propTypes = propTypes;

export default List;
