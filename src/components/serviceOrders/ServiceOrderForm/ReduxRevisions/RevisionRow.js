import { compose, pure, withHandlers, withPropsOnChange } from 'recompose';
import classNames from 'classnames';
import { string, func } from 'prop-types';

import formatTime from 'src/helpers/formatTime';

import css from './style.css';

const propTypes = {
  time: string.isRequired,
  user_username: string.isRequired,
  description: string.isRequired,
  className: string.isRequired,

  onSetEditingRevisionIndex: func.isRequired,
};

const handlersEnhancer = withHandlers({
  onSetEditingRevisionIndex: ({ onSetEditingRevisionIndex, index }) =>
    () => onSetEditingRevisionIndex(index),
});

const propsEnhancer = withPropsOnChange(['index', 'editingRevisionIndex'], ({ index, editingRevisionIndex }) => ({
  className: classNames({
    [css.row]: true,
    [css.active]: index === editingRevisionIndex,
  }),
}));

const enhance = compose(
  handlersEnhancer,
  propsEnhancer,
  pure,
);

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
);

RevisionRow.propTypes = propTypes;

export default enhance(RevisionRow);
