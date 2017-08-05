import { compose, pure, withHandlers, withPropsOnChange } from 'recompose';
import classNames from 'classnames'

import formatTime from 'src/helpers/formatTime'

import css from './style.css'

const handlersEnhancer = withHandlers({
  onSetEditingRevisionIndex: ({ onSetEditingRevisionIndex, index }) => () => onSetEditingRevisionIndex(index)
});

const propsEnhancer = withPropsOnChange(['index', 'editingRevisionIndex'], ({ index, editingRevisionIndex }) => ({
  className: classNames({
    [css.row]: true,
    [css.active]: index === editingRevisionIndex
  })
}))

const enhance = compose(
  handlersEnhancer,
  propsEnhancer,
  pure
)

const RevisionRow = ({
  time,
  user_username,
  description,
  className,

  onSetEditingRevisionIndex,
}) => (
  <tr className={className}>
    <td>{formatTime(time).date()}</td>
    <td>{user_username}</td>
    <td>{description}</td>
    <td>
      <a className={css.editLink} onClick={onSetEditingRevisionIndex}>Edit</a>
    </td>
  </tr>
)

export default enhance(RevisionRow);
