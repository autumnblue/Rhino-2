import { Col, Row, FormGroup, Form, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func } from 'prop-types';

import { ReduxInput, ReduxSelect, Vote } from 'src/components';
import { selectOptionsType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  validationErrors: object,
  onFieldChange: func.isRequired,
};

const ServiceForm = ({
  validationErrors,
  onFieldChange,

  onVoteUp,
  onVoteDown
}) => (
  <Form>
    <Row>
      <legend>Service</legend>
      <Col md="1">
        <Vote
          onVoteUp={onVoteUp}
          onVoteDown={onVoteDown}
          value={default_sort_priority}
        />
      </Col>
      <Col md="5">
        <FormGroup tag="fieldset">
          <FormGroup>
            <Label>Name</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="name"
              placeholder="Service Name"
              onBlur={onFieldChange}
              error={validationErrors.name}
            />
          </FormGroup>
          <FormGroup>
            <label>Default Engagment Type</label>
            <Field
              component={ReduxSelect}
              name="engagement_type"
              placeholder="Default Engagment Type"
              onChange={onFieldChange}
              error={validationErrors.engagement_type}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Field
              component={ReduxInput}
              type="text"
              name="desription"
              placeholder="Description"
              onBlur={onFieldChange}
              error={validationErrors.url}
            />
          </FormGroup>
          <FormGroup>
            <Label>Scope text</Label>
            <Field
              component={ReduxInput}
              type="textarea"
              name="engagement_type_description"
              placeholder="Scope text"
              onBlur={onFieldChange}
              error={validationErrors.address}
            />
          </FormGroup>
          <FormGroup>
            <Label>Remediation text</Label>
            <Field
              component={ReduxInput}
              type="textarea"
              name="remediation_text"
              placeholder="Recomendation text"
              onBlur={onFieldChange}
              error={validationErrors.address}
            />
          </FormGroup>
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup tag="fieldset">
          <legend>Featured Image</legend>
          <FormGroup>
            <img />
          </FormGroup>
          <FormGroup>
            <Label>Service Body</Label>
            <Field
              component={ReduxInput}
              type="textarea"
              name="html_body"
              onBlur={onFieldChange}
              error={validationErrors.focal_last_name}
            />
          </FormGroup>
        </FormGroup>
      </Col>
    </Row>
  </Form>
);

ServiceForm.propTypes = propTypes;

export default enhance(ServiceForm);
