import { Link } from 'react-router';
import { Table } from 'reactstrap';
import { arrayOf } from 'prop-types';
import { compose, pure, withHandlers } from 'recompose';

import { Button, PriorityVote } from 'src/components';
import { clientType } from 'src/prop-types';
import ServiceItem from './ServiceItem';

import css from './style.css';

const propTypes = {
  services: arrayOf(clientType).isRequired,
};

const enhance = compose(
  pure,
);

const List = ({
  services,
  assets,

  onEdit,
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
        <ServiceItem
          key={id}
          {...{
            id,
            name,
            assets,
            default_sort_priority,
            feature_image,
            description,
            tools,

            onEdit,
          }}
        />
      ))}
    </tbody>
  </Table>
);

List.propTypes = propTypes;

export default enhance(List);
