import { compose, pure, withHandlers } from 'recompose';
import { number, string, func, object, array } from 'prop-types';
import { PriorityVote, EntityLink } from 'src/components';

import css from './style.css';

const propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  assets: object.isRequired,
  default_sort_priority: number.isRequired,
  description: string.isRequired,
  feature_image: number,
  tools: array,

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

const ServiceItem = ({
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
      {tools.length}&nbsp;tools
    </td>
    <td>
      <Base
        exists={feature_image}
        component="img"
        src={assets[feature_image].file}
        className={css.image}
        alt="Feature Image"
        title="Feature Image"
      />
    </td>
    <td>
      {description}
    </td>
    <td>
      <EntityLink to={`/services/${id}`} />
    </td>
  </tr>
);

ServiceItem.propTypes = propTypes;

export default enhance(ServiceItem);
