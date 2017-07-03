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
  onBlur,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageHeader>
    <PageContent>
      <ClientForm
        onBlur={onBlur}
        parents={parents}
        issuers={issuers}
        users={users}
        validationErrors={validationErrors}
      />
    </PageContent>
  </Page>
);

export default enhance(ClientEditPage);
