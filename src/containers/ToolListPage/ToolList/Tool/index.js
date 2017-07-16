import { compose, pure, withHandlers } from 'recompose';
import { Link } from 'react-router';
import { number, string, func, arrayOf } from 'prop-types';
import { Icon, Button, Vote } from 'src/components';

import css from './style.css';

const propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  services: arrayOf(number).isRequired,
  default_sort_priority: number.isRequired,

  onVoteUp: func.isRequired,
  onVoteDown: func.isRequired,
};

const handlersEnhancer = withHandlers({
  onVoteUp: ({ onEdit, id, default_sort_priority }) => () => onEdit(id, {
    default_sort_priority: default_sort_priority - 1,
    commit: true,
  }),
  onVoteDown: ({ onEdit, id, default_sort_priority }) => () => onEdit(id, {
    default_sort_priority: default_sort_priority + 1,
    commit: true,
  }),
});

const enhance = compose(
  handlersEnhancer,
  pure,
);

const Tool = ({
  id,
  name,
  services,
  default_sort_priority,

  onVoteUp,
  onVoteDown,
}) => (
  <tr key={id}>
    <td>
      <Vote
        onVoteUp={onVoteUp}
        onVoteDown={onVoteDown}
        value={default_sort_priority}
      />
    </td>
    <td>
      {name}
      <br />
      <br />
      {services.length}&nbsp;Services
    </td>
    <td className={css.lastCell}>
      <Link to={`/tools/${id}`}>
        <Button color="primary" outline disabled className="btn-floating">
          <Icon wb="arrow-right" />
        </Button>
      </Link>
    </td>
  </tr>
);

Tool.propTypes = propTypes;

export default enhance(Tool);
