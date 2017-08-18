import { Link } from 'react-router';
import { FormGroup } from 'reactstrap';
import { arrayOf, object, func, objectOf } from 'prop-types';

import { Page, PageHeader, PageContent, Button, ServiceInstanceForm } from 'src/components';
import { formatMoney } from 'src/helpers';
import { breadcrumbsType, serviceType, serviceInstanceType, assetType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  breadcrumbs: breadcrumbsType.isRequired,
  services: arrayOf(serviceType).isRequired,
  assetsData: objectOf(assetType).isRequired,
  validationErrors: object.isRequired,
  adjustmentValidationErrors: object.isRequired,
  serviceInstance: serviceInstanceType.isRequired,
  choices: object.isRequired,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,

  onEditAdjustment: func.isRequired,
  onAddAdjustment: func.isRequired,
  onDeleteAdjustment: func.isRequired,

  onUploadAsset: func.isRequired,
};

const ServiceInstanceEditPage = ({
  breadcrumbs,
  services,
  assetsData,
  validationErrors,
  adjustmentValidationErrors,
  serviceInstance,
  choices,

  onDelete,
  onFieldChange,

  onEditAdjustment,
  onAddAdjustment,
  onDeleteAdjustment,

  onUploadAsset,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button tag={Link} to={`/service-orders/${serviceInstance.service_order.id}`} color="success">Done</Button>
    </PageHeader>
    <PageContent>
      <ServiceInstanceForm
        id={serviceInstance.id}
        parentBreadcrumbs={breadcrumbs}
        {...{
          services,
          assetsData,
          validationErrors,
          adjustmentValidationErrors,
          choices,

          onFieldChange,

          onEditAdjustment,
          onAddAdjustment,
          onDeleteAdjustment,

          onUploadAsset,
        }}
      />
      <FormGroup>
        Total due: <strong>${formatMoney(serviceInstance.total)}</strong>
      </FormGroup>
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageContent>
  </Page>
);

ServiceInstanceEditPage.propTypes = propTypes;

export default enhance(ServiceInstanceEditPage);
