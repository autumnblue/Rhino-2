import { Row, Col, FormGroup } from 'reactstrap';
import { compose, pure, withState, withPropsOnChange, withHandlers } from 'recompose'

import { Input, Select, DatePicker, Button } from 'src/components';

const userEnhancer = withState('user_id', 'onChangeUser');
const descriptionEnhancer = withState('description', 'onChangeDescription');
const timeEnhancer = withState('time', 'onChangeTime');

const indexChangeEnhancer = withPropsOnChange(
  ['index', 'revisions'],
  ({ user_id, index, revisions, onChangeUser, onChangeTime, onChangeDescription }) => {

    if(typeof index === null || !revisions[index]) {
      if(user_id) { // doesn't call setState while rendering
        onChangeUser(null);
        onChangeTime(new Date());
        onChangeDescription('')
      }
    } else {
      const { time, description, user_id } = revisions[index]
      onChangeUser(user_id);
      onChangeTime(time);
      onChangeDescription(description)
    }

    return {
      isNew: index === null,

    };
  }
)

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete, index }) => () => onDelete(index),
  onAdd: ({ onAdd, user_id, description, time }) => () => onAdd({
    user_id,
    description,
    time
  }),
  onEdit: ({ onEdit, index, user_id, description, time }) => () => onEdit({
    index,
    user_id,
    description,
    time,
  }),
});

const enhance = compose(
  userEnhancer,
  descriptionEnhancer,
  timeEnhancer,
  indexChangeEnhancer,
  handlersEnhancer,
)

const RevisionForm = ({
  isNew,
  time,
  user_id,
  description,
  usersOptions,

  onChangeTime,
  onChangeUser,
  onChangeDescription,
  onCancel,
}) => (
  <Row>
    <Col md="12">
      <h6>{isNew ? 'New Revision' : 'Edit Revision'}</h6>
    </Col>
    <Col md="5" sm="12">
      <FormGroup>
      <DatePicker value={time} onChange={onChangeTime} />
      </FormGroup>
    </Col>
    <Col md="7" sm="12">
      <FormGroup>
        <Select value={user_id} options={usersOptions} onChange={onChangeUser} placeholder="Rhino User" />
      </FormGroup>
      <FormGroup>
        <Input value={description} onChange={onChangeDescription} passValue placeholder="Note" />
      </FormGroup>
    </Col>
    <Base exists={!isNew} component={Col} md="12">
      <Button color="default" onClick={onCancel}>Cancel</Button>{' '}
      <Button color="warning">Delete</Button>
      <Button color="primary" className="float-right">Save</Button>
    </Base>
    <Base exists={isNew} component={Col} md="12">
      <Button color="primary" className="float-right">Create</Button>
    </Base>
  </Row>
)

export default enhance(RevisionForm)
