import { Link } from 'react-router';

const List = ({ clients }) => (
  <table class="table">
    <tbody>
      {clients.map(({
        id,
        name,
        address,
        service_order_count,
        assessment_count,
        departments,
        focal_name,
        focal_email,
        focal_phone
      }) => (
        <tr>
          <td>
            <Link to={`/clients/edit/${id}`}>
              <div className="main-info">
                    <div>
                        {name}
                    </div>
                    <div>
                        {address}
                    </div>
                </div>
                <div className="order-info">
                    <div className="row">
                        {service_order_count + " Service Orders"}
                        {assessment_count + " Assessments"}
                    </div>
                    <div className="row">
                        {departments.length + " Departments"}
                    </div>
                </div>
                <div className="focal-info">
                    <div>
                        {focal_name}
                    </div>
                    <div>
                        <a href={"mailto:" + focal_email}>{focal_email}</a>
                    </div>
                    <div>
                        {focal_phone}
                    </div>
                </div>
                <div className="nav-container">
                    &rarr;
                </div>
              </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default List;
