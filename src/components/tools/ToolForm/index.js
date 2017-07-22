import { Col, Row, FormGroup, Form } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func, bool } from 'prop-types';

import { ReduxInput, ReduxPriorityVote, ReduxAssociations, ReduxQuill } from 'src/components';
import { selectOptionsType } from 'src/prop-types';

import enhance from './enhance';
import css from './style.css';

const propTypes = {
  validationErrors: object.isRequired,
  findingsOptions: selectOptionsType.isRequired,
  servicesOptions: selectOptionsType.isRequired,
  isNew: bool,

  onFieldChange: func.isRequired,
};

const ClientForm = ({
  validationErrors,
  findingsOptions,
  servicesOptions,
  isNew,

  onFieldChange,
}) => (
  <Form>
    <Row>
      <Col md="6">
        <FormGroup>
          <Field
            disabled={isNew}
            component={ReduxPriorityVote}
            className={css.vote}
            onChange={onFieldChange}
            name="default_sort_priority"
          />

          <Field
            wrapperClassName={css.name}
            component={ReduxInput}
            name="name"
            placeholder="Tool Name"
            onBlur={onFieldChange}
            error={validationErrors.name}
          />
        </FormGroup>
        <FormGroup>
          <label>HTML Body</label>
          <Field
            component={ReduxQuill}
            name="html_body"
            onBlur={onFieldChange}
            error={validationErrors.html_body}
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup>
          <label>Associated findings</label>
          <Field
            component={ReduxAssociations}
            name="associated_findings"
            options={findingsOptions}
            onChange={onFieldChange}
            error={validationErrors.associated_findings}
          />
        </FormGroup>
        <FormGroup>
          <label>Associated services</label>
          <Field
            component={ReduxAssociations}
            name="services"
            options={servicesOptions}
            onChange={onFieldChange}
            error={validationErrors.services}
          />
        </FormGroup>
      </Col>
    </Row>
  </Form>
);

ClientForm.propTypes = propTypes;

export default enhance(ClientForm);
