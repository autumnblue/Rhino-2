import { Table } from 'reactstrap';
import { compose, pure, withPropsOnChange } from 'recompose';
import { arrayOf } from 'prop-types';

import { serviceOrderType } from 'src/prop-types';
import { EntityLink } from 'src/components';
import formatTime from 'src/helpers/formatTime'

const propTypes = {
  serviceOrders: arrayOf(serviceOrderType).isRequired,
};

const propsEnhancer = withPropsOnChange(
  ['client', 'clientsData', 'total_due'], ({ client, clientsData, total_due }) => ({
    client: clientsData[client] || {
      name: 'Unknown Client'
    },
    total_due_str: total_due < 0 ? `-$${-total_due}` : `$${total_due}`
  })
)

const enhance = compose(
  propsEnhancer,
  pure
);

const ServiceOrderListItem = ({
  id,
  composite_id,
  status,
  payment,
  signed_date,
  start_date,
  end_date,
  total_due_str,

  client,
  assessment_count
}) => (
  <tr>
    <td>
      <strong>{composite_id}</strong>
      <br /><br />
      {client.name}
    </td>
    <td>
      {client.focal_first_name}&nbsp;{client.focal_last_name}
      <br /><br />
      {client.focal_email}
      <br /><br />
      {client.focal_phone}
    </td>
    <td>
      Status:&nbsp;{status}
      <br /><br />
      Payment:&nbsp;{payment}
      <br /><br />
      {assessment_count}&nbsp;Assessments
    </td>
    <td>
      Signed:&nbsp;{formatTime(signed_date).date() || '-'}<br />
      Start:&nbsp;{formatTime(start_date).date() || '-'}<br />
      End:&nbsp;{formatTime(end_date).date() || '-'}
      <br /><br />
      <strong>Total&nbsp;Due:&nbsp;{total_due_str}</strong>
    </td>
    <td>
      <EntityLink to={`/service-orders/${id}`} />
    </td>
  </tr>
);

ServiceOrderListItem.propTypes = propTypes;

export default enhance(ServiceOrderListItem);
