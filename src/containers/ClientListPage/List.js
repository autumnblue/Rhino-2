import { Link } from 'react-router';
import { Table } from 'reactstrap';
import { Button } from 'src/components';

const List = ({ clients }) => (
  <Table striped>
    <tbody>
      {console.log(clients)}
      {clients.map(({
        id,
        name,
        address,
        service_order_count,
        assessment_count,
        departments,
        focal_first_name,
        focal_last_name,
        focal_email,
        focal_phone,
      }) => (
        <tr key={id}>
          <td>
            {name}
            <br /><br />
            {address}
          </td>
          <td>
            {service_order_count}&nbsp;Service&nbsp;Orders
            <br /><br />
            {assessment_count}&nbsp;Assessments
            <br /><br />
            {departments.length}&nbsp;Departments
          </td>
          <td>
            {focal_first_name} {focal_last_name}
            <br /><br />
            {focal_email}
            <br /><br />
            {focal_phone}
          </td>
          <td>
            <Link to={`/clients/${id}`}>
              <Button color="primary" outline>&rarr;</Button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default List;
