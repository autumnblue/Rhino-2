import { Link } from 'react-router';
import { ClientForm, Page, PageContent, PageHeader, Button } from 'src/components';
import enhance from './enhance';

const breadcrumbs = [{
  label: 'Clients',
  url: '/clients/list',
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

export default enhance(NewClientPage);
