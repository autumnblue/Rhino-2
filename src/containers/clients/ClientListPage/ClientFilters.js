import { compose, pure } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { Col, Row, FormGroup } from 'reactstrap';
import { func } from 'prop-types';

import { ReduxInput, ReduxSelect } from 'src/components';

const propTypes = {
  onFiltersChange: func.isRequired,
};

const sortOptions = [
  { value: 'date_created', label: 'Date Created' },
  { value: 'name', label: 'Company Name' },
  { value: 'focal_name', label: 'Focal Name' },
  { value: 'service', label: 'Number of Service Orders' },
  { value: 'assessments', label: 'Number of Assessments' },
];

const perPageOptions = [
  { value: '10', label: 'Display 10' },
  { value: '50', label: 'Display 50' },
  { value: '100', label: 'Display 100' },
  { value: '1000', label: 'Display All' },
];

const reduxFormEnhancer = reduxForm({
  form: 'clientListFilterForm',
});

const enhance = compose(
  reduxFormEnhancer,
  pure,
);

const ClientFilters = ({
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
        component={ReduxSelect}
        name="per_page"
        options={perPageOptions}
        placeholder="Items Per Page"
        onChange={onFiltersChange}
      />
    </FormGroup>
  </Col>
  <Col md="4">
    <FormGroup>
      <Field
        component={ReduxInput}
        name="contains"
        type="text"
        placeholder="Filter..."
        onBlur={onFiltersChange}
      />
    </FormGroup>
  </Col>
</Row>);

ClientFilters.propTypes = propTypes;

export default enhance(ClientFilters);
