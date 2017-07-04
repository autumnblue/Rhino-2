import { Page, PageContent, PageHeader, Button } from 'src/components';
import { Link } from 'react-router';

import enhance from './enhance';
import List from './List';
import Filters from './Filters';

const breadcrumbs = [{ label: 'Clients' }];

const ClientListPage = ({
  clients,
  filters,

  onFiltersChange
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/clients/new">
        <Button color="primary">Create new client</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <Filters onChange={onFiltersChange} initialValues={filters} />
      <List clients={clients} />
    </PageContent>
  </Page>
);

export default enhance(ClientListPage);
