import { compose, pure, withHandlers } from 'recompose';
import { Link } from 'react-router';
import { number, string, func, arrayOf, object } from 'prop-types';
import { Button, PriorityVote } from 'src/components';

import css from './style.css';

const propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  assets: object.isRequired,
  default_sort_priority: number.isRequired,
  description: string.isRequired,

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

const  ServiceItem = ({
                id,
                name,
                assets,
                default_sort_priority,
                feature_image,
                description,
                tools,

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
      <br /><br />
      {tools.length} tools
    </td>
    <td>
      {feature_image ? <img src={assets[feature_image].file} className={css.image}/> : null}
    </td>
    <td>
      {description}
    </td>
    <td>
      <Link to={`/services/${id}`}>
        <Button color="primary" outline>&rarr;</Button>
      </Link>
    </td>
  </tr>
);

ServiceItem.propTypes = propTypes;

export default enhance(ServiceItem);

