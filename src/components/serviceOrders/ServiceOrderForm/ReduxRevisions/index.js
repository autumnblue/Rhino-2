import { Table, Row, Col } from 'reactstrap';
import { compose, pure, withState, withHandlers } from 'recompose'

import RevisionRow from './RevisionRow';
import RevisionForm from './RevisionForm';

import css from './style.css'

const editingRevisionIndexEnhancer = withState('editingRevisionIndex', 'onSetEditingRevisionIndex', null)

const handlersEnhancer = withHandlers({
  onCancel: ({ onSetEditingRevisionIndex }) => () => onSetEditingRevisionIndex(null),
  onEdit: ({ onChange, value }) => ({
    index,
    user_id,
    description,
    time,
  }) => {}
});



const enhance = compose(
  editingRevisionIndexEnhancer,
  handlersEnhancer,
  pure,
)

const ReduxRevisions = ({
  input: { value },
  editingRevisionIndex,
  usersOptions,

  onSetEditingRevisionIndex,
  onCancel,
}) => (
  <div className={css.wrapper}>
    <Table striped responsive className={css.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Username</th>
          <th>Note</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {value.map(({ time, user_username, description }, index) => (
        <RevisionRow {...{
          key: index,
          index,
          time,
          user_username,
          description,

          onSetEditingRevisionIndex,
        }} />
      ))}
      </tbody>
    </Table>
    <RevisionForm
      revisions={value}
      index={editingRevisionIndex}
      usersOptions={usersOptions}

      onCancel={onCancel}
    />
  </div>
)

export default enhance(ReduxRevisions)
