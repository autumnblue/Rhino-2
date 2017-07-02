import { Page, PageContent, PageHeader, Button } from 'src/components';
import { Link } from 'react-router';

import enhance from './enhance';
import List from './List';

const breadcrumbs = [{ label: 'Clients' }];

const ClientListPage = ({ clients }) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/clients/new">
        <Button color="primary">Create new client</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <List clients={clients} />
    </PageContent>
  </Page>
);

export default enhance(ClientListPage);
