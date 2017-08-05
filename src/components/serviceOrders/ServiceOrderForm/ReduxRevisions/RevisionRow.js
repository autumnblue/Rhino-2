import { compose, pure, withHandlers } from 'recompose'

const handlersEnhancer = withHandlers({
  onSetEditingRevisionIndex: ({ onSetEditingRevisionIndex, index }) => () => onSetEditingRevisionIndex(index)
})

const enhance = compose(
  handlersEnhancer,
  pure
)

const RevisionRow = ({
  time,
  user_username,
  description,

  onSetEditingRevisionIndex,
}) => (
  <tr>
    <td>{time}</td>
    <td>{user_username}</td>
    <td>{description}</td>
    <td onClick={onSetEditingRevisionIndex}>Edit</td>
  </tr>
)

export default enhance(RevisionRow);
