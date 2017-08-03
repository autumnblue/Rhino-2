import { Col, Row, Form, FormGroup } from 'reactstrap';
import { Field } from 'redux-form';
import { object, func } from 'prop-types';

import {
  Input,
  FieldError,
  Checkbox,
  ReduxInput,
  ReduxSelect,
  ReduxExpandableRichText
} from 'src/components';
import { breadcrumbsType } from 'src/prop-types';

import MainInfoFormGroup from './MainInfoFormGroup';
import TeamFormGroup from './TeamFormGroup';
import TextSectionsFormGroup from './TextSectionsFormGroup';
import IndustriesFormGroup from './IndustriesFormGroup';
import RevisionsFormGroup from './RevisionsFormGroup';

import enhance from './enhance';

const propTypes = {
  validationErrors: object.isRequired,
  breadcrumbs: breadcrumbsType.isRequired,

  onFieldChange: func.isRequired,
};

const ServiceOrderForm = ({
  clientOptions,
  statusOptions,
  paymentOptions,
  usersOptions,
  industriesOptions,
  breadcrumbs,
  validationErrors,

  onFieldChange,
}) => (
  <Form>
    <Row>
      <Col md="6">
        <MainInfoFormGroup {...{
            clientOptions,
            statusOptions,
            paymentOptions,
            breadcrumbs,
            validationErrors,

            onFieldChange,
          }}
        />
        <TeamFormGroup
          validationErrors={validationErrors}
          usersOptions={usersOptions}
          onFieldChange={onFieldChange}
        />
      </Col>
      <Col md="6">
        <RevisionsFormGroup
          validationErrors={validationErrors}
          usersOptions={usersOptions}
          onFieldChange={onFieldChange}
        />
        <TextSectionsFormGroup
          breadcrumbs={breadcrumbs}
          validationErrors={validationErrors}
          onFieldChange={onFieldChange}
        />
        <IndustriesFormGroup
          industriesOptions={industriesOptions}
          validationErrors={validationErrors}
          onFieldChange={onFieldChange}
        />
      </Col>
    </Row>
  </Form>
);

ServiceOrderForm.propTypes = propTypes;

export default enhance(ServiceOrderForm);
