import { Button } from 'reactstrap';
import { object, func, shape } from 'prop-types';
import { Link } from 'react-router';

import { ServiceForm, Page, PageContent, PageHeader } from 'src/components';
import { breadcrumbsType, serviceType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  service: serviceType.isRequired,
  breadcrumbs: breadcrumbsType.isRequired,
  assetsData: object.isRequired,
  choices: shape({
    engagement_type: object.isRequired,
  }).isRequired,
  validationErrors: object,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,
  onUploadAsset: func.isRequired,
};

const ServiceEditPage = ({
  service,
  breadcrumbs,
  validationErrors,
  choices,
  assetsData,

  onDelete,
  onFieldChange,
  onUploadAsset,
}) => (
  <Page title={`Editing ${service.name}`}>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button tag={Link} to="/services" color="success">Done</Button>
    </PageHeader>
    <PageContent>
      <ServiceForm
        choices={choices}
        assetsData={assetsData}
        validationErrors={validationErrors}

        onFieldChange={onFieldChange}
        onUploadAsset={onUploadAsset}
      />
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageContent>
  </Page>
);

ServiceEditPage.propTypes = propTypes;

export default enhance(ServiceEditPage);
