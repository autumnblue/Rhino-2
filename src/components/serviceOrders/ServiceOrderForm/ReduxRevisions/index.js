import { Table } from 'reactstrap';
import { compose, pure, withState, withHandlers } from 'recompose';
import { string, number, func } from 'prop-types';

import { FieldError } from 'src/components';
import { selectOptionsType, reduxFormInputType } from 'src/prop-types';

import RevisionRow from './RevisionRow';
import RevisionForm from './RevisionForm';

import css from './style.css';

const propTypes = {
  input: reduxFormInputType.isRequired,
  error: string,
  editingRevisionIndex: number,
  userOptions: selectOptionsType.isRequired,

  onSetEditingRevisionIndex: func.isRequired,
  onCancel: func.isRequired,
  onEdit: func.isRequired,
  onAdd: func.isRequired,
  onDelete: func.isRequired,
};

const editingRevisionIndexEnhancer = withState('editingRevisionIndex', 'onSetEditingRevisionIndex', null);

const handlersEnhancer = withHandlers({
  onCancel: ({ onSetEditingRevisionIndex }) => () => onSetEditingRevisionIndex(null),
  onEdit: ({ input: { value, onChange }, usersData, onSetEditingRevisionIndex }) => ({
    index,
    user_id,
    description,
    time,
  }) => {
    const user = usersData[user_id];

    onChange([
      ...value.slice(0, index),
      {
        user_id,
        description,
        time,
        user_email: user.email,
        user_username: user.username,
        user_full_name: `${user.first_name} ${user.last_name}`,
      },
      ...value.slice(index + 1),
    ]);

    onSetEditingRevisionIndex(null);
  },
  onAdd: ({ input: { value, onChange }, usersData, onSetEditingRevisionIndex }) => ({
    user_id,
    description,
    time,
  }) => {
    const user = usersData[user_id];

    onChange([
      ...value,
      {
        user_id,
        description,
        time,
        user_email: user.email,
        user_username: user.username,
        user_full_name: `${user.first_name} ${user.last_name}`,
      },
    ]);

    onSetEditingRevisionIndex(null);
  },
  onDelete: ({ input: { value, onChange }, onSetEditingRevisionIndex }) => ({
    index,
  }) => {
    onChange([
      ...value.slice(0, index),
      ...value.slice(index + 1),
    ]);

    onSetEditingRevisionIndex(null);
  },
});


const enhance = compose(
  editingRevisionIndexEnhancer,
  handlersEnhancer,
  pure,
);

const ReduxRevisions = ({
  input: { value },
  error,
  editingRevisionIndex,
  userOptions,

  onSetEditingRevisionIndex,
  onCancel,
  onEdit,
  onAdd,
  onDelete,
}) => (
  <div className={css.wrapper}>
    <Table striped responsive className={css.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Username</th>
          <th>Note</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {value.map(({ time, user_username, description }, index) => (
          <RevisionRow {...{
            key: index,
            editingRevisionIndex,
            index,
            time,
            user_username,
            description,

            onSetEditingRevisionIndex,
          }}
          />
      ))}
      </tbody>
    </Table>
    <RevisionForm
      revisions={value}
      index={editingRevisionIndex}
      userOptions={userOptions}

      onCancel={onCancel}
      onEdit={onEdit}
      onAdd={onAdd}
      onDelete={onDelete}
    />
    <FieldError error={error} />
  </div>
);

ReduxRevisions.propTypes = propTypes;

export default enhance(ReduxRevisions);
