import { Row, Col, FormGroup } from 'reactstrap'
import { Field } from 'redux-form';

import { ReduxPriorityVote, ReduxInput, ReduxSelect } from 'src/components'

const AdjustmentFields = ({
  member,
}) => (
  <Row>
    <Col md="1" sm="1">
      <Field
        component={ReduxPriorityVote}
        name={`${member}.sort_priority`}
      />
    </Col>
    <Col md="11" sm="11">
      <Row>
      <Col md="3" sm="3">
      <FormGroup>
      <label>Value</label>
        <Field
          component={ReduxInput}
          name={`${member}.value`}
        />
        </FormGroup>

      </Col>
      <Col md="3" sm="3">
      <FormGroup>
      <label>Modifier</label>
        <Field
          component={ReduxSelect}
          name={`${member}.modifier`}
        />
        </FormGroup>
      </Col>
      <Col md="6" sm="6">
        <FormGroup>
        <label>Label</label>
        <Field
          component={ReduxInput}
          name={`${member}.label`}
        />
        </FormGroup>
      </Col>
      <Col md="12" sm="12">
        <FormGroup>
        <label>Description</label>
        <Field
          component={ReduxInput}
          name={`${member}.description`}
          type="textarea"
        />
        </FormGroup>
      </Col>
      </Row>
    </Col>
  </Row>
)

export default AdjustmentFields;
