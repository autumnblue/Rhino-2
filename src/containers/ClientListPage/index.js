import { Link } from 'react-router';
import ReactPaginate from 'react-paginate';

import { Page, PageContent, PageHeader, Button, Paginate } from 'src/components';

import enhance from './enhance';
import List from './List';
import Filters from './Filters';

const breadcrumbs = [{ label: 'Clients' }];

const ClientListPage = ({
  clients,
  filters,

  page,
  pageCount,

  onFiltersChange,
  onPageChange
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
      <Paginate
        pageCount={pageCount}
        page={page}
        onChange={onPageChange}
      />
    </PageContent>
  </Page>
);

export default enhance(ClientListPage);
