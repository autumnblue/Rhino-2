import { Row, Col, FormGroup } from 'reactstrap';
import { compose, pure, withState, withPropsOnChange, withHandlers } from 'recompose';
import { bool, string, func } from 'prop-types';

import { Input, Select, DatePicker, Button } from 'src/components';
import { selectOptionsType } from 'src/prop-types';

const propTypes = {
  isNew: bool.isRequired,
  time: string.isRequired,
  user_id: string.isRequired,
  description: string.isRequired,
  userOptions: selectOptionsType.isRequired,

  onChangeTime: func.isRequired,
  onChangeUser: func.isRequired,
  onChangeDescription: func.isRequired,
  onCancel: func.isRequired,
  onEdit: func.isRequired,
  onAdd: func.isRequired,
  onDelete: func.isRequired,
};

const userEnhancer = withState('user_id', 'onChangeUser', null);
const descriptionEnhancer = withState('description', 'onChangeDescription', '');
const timeEnhancer = withState('time', 'onChangeTime', Date.now());

const indexChangeEnhancer = withPropsOnChange(
  ['index', 'revisions'],
  ({
    index,
    revisions,
    user_id: currentUserId,
    onChangeUser,
    onChangeTime,
    onChangeDescription,
  }) => {
    if (index === null || !revisions[index]) {
      if (currentUserId) { // doesn't call setState while rendering
        onChangeUser(null);
        onChangeTime(new Date());
        onChangeDescription('');
      }
    } else {
      const { time, description, user_id } = revisions[index];
      onChangeUser(user_id);
      onChangeTime(time);
      onChangeDescription(description);
    }

    return {
      isNew: index === null,

    };
  },
);

const handlersEnhancer = withHandlers({
  onDelete: ({ onDelete, index }) => () => onDelete({ index }),
  onAdd: ({ onAdd, user_id, description, time }) => () => onAdd({
    user_id,
    description,
    time,
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
  pure,
);

const RevisionForm = ({
  isNew,
  time,
  user_id,
  description,
  userOptions,

  onChangeTime,
  onChangeUser,
  onChangeDescription,
  onCancel,
  onEdit,
  onAdd,
  onDelete,
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
        <Select value={user_id} options={userOptions} onChange={onChangeUser} placeholder="Rhino User" />
      </FormGroup>
      <FormGroup>
        <Input value={description} onChange={onChangeDescription} passValue placeholder="Note" />
      </FormGroup>
    </Col>
    <Base exists={!isNew} component={Col} md="12">
      <Button color="default" onClick={onCancel}>Cancel</Button>{' '}
      <Button color="warning" onClick={onDelete}>Delete</Button>
      <Button color="primary" className="float-right" onClick={onEdit}>Save</Button>
    </Base>
    <Base exists={isNew} component={Col} md="12">
      <Button color="primary" className="float-right" onClick={onAdd}>Create</Button>
    </Base>
  </Row>
);

RevisionForm.propTypes = propTypes;

export default enhance(RevisionForm);
