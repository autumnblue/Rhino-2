import { Button } from 'reactstrap';
import { object, func } from 'prop-types';

import { ServiceForm, Page, PageContent, PageHeader } from 'src/components';
import { breadcrumbsType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  validationErrors: object,
  breadcrumbs: breadcrumbsType.isRequired,
  assets: object.isRequired,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,
  upload: func.isRequired,
};

const ServiceEditPage = ({
  breadcrumbs,
  validationErrors,
  assets,

  onDelete,
  onFieldChange,
  upload,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageHeader>
    <PageContent>
      <ServiceForm
        onFieldChange={onFieldChange}
        validationErrors={validationErrors}
        assets={assets}
        upload={upload}
      />
    </PageContent>
  </Page>
);

ServiceEditPage.propTypes = propTypes;

export default enhance(ServiceEditPage);
