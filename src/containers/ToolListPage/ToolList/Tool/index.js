import { compose, pure, withHandlers } from 'recompose';
import { Link } from 'react-router';
import { number, string, func, arrayOf } from 'prop-types';
import { Icon, Button, PriorityVote } from 'src/components';

import css from './style.css';

const propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  services: arrayOf(number).isRequired,
  default_sort_priority: number.isRequired,

  onVote: func.isRequired,
};

const handlersEnhancer = withHandlers({
  onVote: ({ onEdit, id }) => default_sort_priority => onEdit(id, {
    default_sort_priority,
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

  onVote,
}) => (
  <tr key={id}>
    <td>
      <PriorityVote
        onChange={onVote}
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
        <Button color="primary" outline className="btn-floating">
          <Icon wb="arrow-right" />
        </Button>
      </Link>
    </td>
  </tr>
);

Tool.propTypes = propTypes;

export default enhance(Tool);

