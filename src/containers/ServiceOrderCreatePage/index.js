import { Link } from 'react-router';
import { object, func } from 'prop-types';

import { Page, PageContent, PageHeader, Button, ServiceOrderForm } from 'src/components';

import enhance from './enhance';

const propTypes = {
  validationErrors: object,

  onFieldChange: func.isRequired,
};

const breadcrumbs = [{
  label: 'Service Orders',
  url: '/service-orders',
}, {
  label: 'New Service Order',
}];

const ToolCreatePage = ({
  validationErrors,

  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/service-orders">
        <Button color="default">Cancel</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <ServiceOrderForm
        onFieldChange={onFieldChange}
        validationErrors={validationErrors}
      />
    </PageContent>
  </Page>
);

ToolCreatePage.propTypes = propTypes;

export default enhance(ToolCreatePage);
