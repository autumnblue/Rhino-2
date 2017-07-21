import { Table } from 'reactstrap';
import { compose, pure } from 'recompose';

import { array, object, func } from 'prop-types';
import ServiceItem from './ServiceItem';

const propTypes = {
  services: array.isRequired,
  assets: object.isRequired,
  onEdit: func.isRequired,
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
        feature_image,
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
