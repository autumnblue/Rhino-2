import { Link } from 'react-router';
import { Table } from 'reactstrap';
import { arrayOf } from 'prop-types';
import { compose, pure, withHandlers } from 'recompose';

import { Button, Vote } from 'src/components';
import { clientType } from 'src/prop-types';

import css from './style.css';

const propTypes = {
  services: arrayOf(clientType).isRequired,
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

const List = ({
  services,
  assets,

  onVoteUp,
  onVoteDown
}) => (
  <Table striped>
    <tbody>
      {services.map(({
        id,
        name,
        default_sort_priority,
        description,
        engagement_type,
        engagement_type_description,
        entity_type,
        feature_image,
        html_body,
        remediation_ordered,
        remediation_text,
        tools,
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
      ))}
    </tbody>
  </Table>
);

List.propTypes = propTypes;

export default enhance(List);
