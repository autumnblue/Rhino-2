import { ClientForm, Page, PageContent, PageHeader } from 'src/components';
import enhance from './enhance';
import { Button } from 'reactstrap';

const ClientEditPage = ({
  parents,
  issuers,
  users,

  breadcrumbs,
  validationErrors,

  onDelete,
  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button color="danger" onClick={onDelete}>Delete</Button>
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

export default enhance(ClientEditPage);
