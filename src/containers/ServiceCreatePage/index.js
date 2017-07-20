import { Link } from 'react-router';
import { object, func } from 'prop-types';

import { ServiceForm, Page, PageContent, PageHeader, Button } from 'src/components';

import enhance from './enhance';

const propTypes = {

  validationErrors: object,

  onFieldChange: func.isRequired,
};

const breadcrumbs = [{
  label: 'Services',
  url: '/services',
}, {
  label: 'New Service',
}];

const ServiceCreatePage = ({
  validationErrors,

  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/services">
        <Button color="default">Cancel</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <ServiceForm
        isNew
        onFieldChange={onFieldChange}
        validationErrors={validationErrors}
      />
    </PageContent>
  </Page>
);

ServiceCreatePage.propTypes = propTypes;

export default enhance(ServiceCreatePage);
