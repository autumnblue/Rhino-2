import { Col, Row, Form } from 'reactstrap';
import { object, func, objectOf, string, number, bool } from 'prop-types';

import { breadcrumbsType, selectOptionsType, userType } from 'src/prop-types';
import formatTime from 'src/helpers/formatTime';

import MainInfoFormGroup from './MainInfoFormGroup';
import TeamFormGroup from './TeamFormGroup';
import TextSectionsFormGroup from './TextSectionsFormGroup';
import IndustriesFormGroup from './IndustriesFormGroup';
import RevisionsFormGroup from './RevisionsFormGroup';
import ButtonsFormGroup from './ButtonsFormGroup';

import enhance from './enhance';

const propTypes = {
  isNew: bool,
  id: number,
  clientOptions: selectOptionsType.isRequired,
  statusOptions: selectOptionsType.isRequired,
  paymentOptions: selectOptionsType.isRequired,
  userOptions: selectOptionsType.isRequired,
  industryOptions: selectOptionsType.isRequired,
  focalProfileOptions: selectOptionsType.isRequired,
  usersData: objectOf(userType).isRequired,
  created: string,
  validationErrors: object.isRequired,
  breadcrumbs: breadcrumbsType.isRequired,

  onFieldChange: func.isRequired,
};

const ServiceOrderForm = ({
  isNew,
  clientOptions,
  statusOptions,
  paymentOptions,
  userOptions,
  industryOptions,
  focalProfileOptions,
  usersData,
  created,
  id,
  breadcrumbs,
  validationErrors,

  onFieldChange,
}) => (
  <Form>
    <Row>
      <Col md="6" sm="12">
        <em>Created: {formatTime(created).date() || '-'}</em>
        <br /><br />
        <MainInfoFormGroup {...{
          isNew,
          clientOptions,
          statusOptions,
          paymentOptions,
          focalProfileOptions,
          breadcrumbs,
          validationErrors,

          onFieldChange,
        }}
        />
        <TeamFormGroup
          validationErrors={validationErrors}
          userOptions={userOptions}
          onFieldChange={onFieldChange}
        />
      </Col>
      <Col md="6" sm="12">
        <ButtonsFormGroup id={id} isNew={isNew} />
        <RevisionsFormGroup
          isNew={isNew}
          validationErrors={validationErrors}
          userOptions={userOptions}
          usersData={usersData}
          onFieldChange={onFieldChange}
        />
        <TextSectionsFormGroup
          breadcrumbs={breadcrumbs}
          validationErrors={validationErrors}
          onFieldChange={onFieldChange}
        />
        <IndustriesFormGroup
          industryOptions={industryOptions}
          validationErrors={validationErrors}
          onFieldChange={onFieldChange}
        />
      </Col>
    </Row>
  </Form>
);

ServiceOrderForm.propTypes = propTypes;

export default enhance(ServiceOrderForm);
