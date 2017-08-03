import { Table }from 'reactstrap';



const ReduxRevisions = ({
  revisions = [{ date: new Date(), username: 'foo', note: 'bar' }],
  editingId = 1
}) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Username</th>
          <th>Note</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {revisions.map(({ date, username, note, id }) => (
        <tr className={editingId === id ? css.highlighted : ''}>
          <td>{date}</td>
          <td>{username}</td>
          <td>{note}</td>
          <td onClick={onExpandEdit}>Edit</td>
        </tr>
      ))}
      </tbody>
    </Table>
    <Base exists={editingId}>
      <Row>
        <Col md="4">
          
        </Col>
      </Row>
    </Base>
    </Base>
  </div>
)
