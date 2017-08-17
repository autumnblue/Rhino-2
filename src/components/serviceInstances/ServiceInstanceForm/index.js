import { Form, Row, Col } from 'reactstrap';
import { object, func } from 'prop-types';

import { selectOptionsType, breadcrumbsType } from 'src/prop-types';

import SubtotalFormLeftSide from './SubtotalFormLeftSide';
import SubtotalFormRightSide from './SubtotalFormRightSide';
import enhance from './enhance';

const propTypes = {
  serviceOptions: selectOptionsType.isRequired,
  engagementTypeOptions: selectOptionsType.isRequired,
  parentBreadcrumbs: breadcrumbsType.isRequired,
  validationErrors: object.isRequired,
  adjustmentValidationErrors: object.isRequired,

  onFieldChange: func.isRequired,
  onEditAdjustment: func.isRequired,
  onAddAdjustment: func.isRequired,
  onDeleteAdjustment: func.isRequired,

  onUploadAsset: func.isRequired,
};

const ServiceInstanceForm = ({
  serviceOptions,
  engagementTypeOptions,
  parentBreadcrumbs,
  validationErrors,
  adjustmentValidationErrors,

  onFieldChange,
  onEditAdjustment,
  onAddAdjustment,
  onDeleteAdjustment,

  onUploadAsset,
}) => (
  <Form>
    <Row>
      <Col md="6">
        <SubtotalFormLeftSide {...{
          serviceOptions,
          validationErrors,
          adjustmentValidationErrors,

          onFieldChange,

          onEditAdjustment,
          onAddAdjustment,
          onDeleteAdjustment,
        }}
        />
      </Col>
      <Col md="6">
        <SubtotalFormRightSide {...{
          parentBreadcrumbs,
          engagementTypeOptions,
          validationErrors,

          onFieldChange,

          onUploadAsset,
        }}
        />
      </Col>
    </Row>
  </Form>
);

ServiceInstanceForm.propTypes = propTypes;

export default enhance(ServiceInstanceForm);
