import { Link } from 'react-router';
import { arrayOf, object, func } from 'prop-types';

import { ClientForm, Page, PageContent, PageHeader, Button } from 'src/components';
import { clientType, issuerType, userType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  parents: arrayOf(clientType).isRequired,
  issuers: arrayOf(issuerType).isRequired,
  users: arrayOf(userType).isRequired,

  validationErrors: object,

  onFieldChange: func.isRequired,
};

const breadcrumbs = [{
  label: 'Clients',
  url: '/clients',
}, {
  label: 'New Client',
}];

const NewClientPage = ({
  parents,
  issuers,
  users,

  validationErrors,

  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/clients">
        <Button color="default">Cancel</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <ClientForm
        onFieldChange={onFieldChange}
        parents={parents}
        issuers={issuers}
        users={users}
        validationErrors={validationErrors}
      />
    </PageContent>
  </Page>
);

NewClientPage.propTypes = propTypes;

export default enhance(NewClientPage);
