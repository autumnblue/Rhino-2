import { compose, pure } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { Col, Row, FormGroup } from 'reactstrap';
import { func } from 'prop-types';

import { ReduxInput, ReduxSelect } from 'src/components';

const propTypes = {
  onFiltersChange: func.isRequired,
};

const reduxFormEnhancer = reduxForm({
  form: 'serviceOrderListFilterForm',
});

const enhance = compose(
  reduxFormEnhancer,
  pure,
);

const ServiceOrderFilters = ({
  onFiltersChange,
}) => (<Row>
  <Col md="4">
    <FormGroup>
      <Field
        component={ReduxSelect}
        name="sort"
        options={sortOptions}
        placeholder="Sort"
        onChange={onFiltersChange}
      />
    </FormGroup>
  </Col>
  <Col md="4">
    <FormGroup>
      <Field
        component={ReduxInput}
        name="contains"
        placeholder="Filter..."
        onBlur={onFiltersChange}
      />
    </FormGroup>
  </Col>
</Row>);

ServiceOrderFilters.propTypes = propTypes;

export default enhance(ServiceOrderFilters);
