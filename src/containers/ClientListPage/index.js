import { Link } from 'react-router';
import ReactPaginate from 'react-paginate';

import { Page, PageContent, PageHeader, Button } from 'src/components';


import enhance from './enhance';
import List from './List';
import Filters from './Filters';

const breadcrumbs = [{ label: 'Clients' }];

const ClientListPage = ({
  clients,
  filters,

  onFiltersChange,
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
      {/*<ReactPaginate
        pageCount={10}
        pageRangeDisplayed={2}
        marginPagesDisplayed={3}
        onPageChange={(p) => conaole.log('page', p)}
      />*/}
    </PageContent>
  </Page>
);

export default enhance(ClientListPage);
