import { compose, pure } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { Col, Row, FormGroup } from 'reactstrap';
import { func } from 'prop-types';

import { ReduxInput } from 'src/components';

const propTypes = {
  onFiltersChange: func.isRequired,
};

const reduxFormEnhancer = reduxForm({
  form: 'serviceListFilterForm',
});

const enhance = compose(
  reduxFormEnhancer,
  pure,
);

const ServiceFilters = ({
  onFiltersChange,
}) => (<Row>
  <Col md="12">
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

ServiceFilters.propTypes = propTypes;

export default enhance(ServiceFilters);