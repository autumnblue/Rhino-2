import { Link } from 'react-router';
import { object, func, arrayOf } from 'prop-types';

import { ToolForm, Page, PageContent, PageHeader, Button } from 'src/components';
import { serviceType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  services: arrayOf(serviceType).isRequired,
  validationErrors: object,

  onFieldChange: func.isRequired,
};

const breadcrumbs = [{
  label: 'Clients',
  url: '/clients',
}, {
  label: 'New Client',
}];

const ToolCreatePage = ({
  services,
  validationErrors,

  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/tools">
        <Button color="default">Cancel</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <ToolForm
        isNew
        services={services}
        validationErrors={validationErrors}

        onFieldChange={onFieldChange}
      />
    </PageContent>
  </Page>
);

ToolCreatePage.propTypes = propTypes;

export default enhance(ToolCreatePage);
