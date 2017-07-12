import { Page, PageContent, PageHeader, Button } from 'src/components';
import { Link } from 'react-router';

import enhance from './enhance';
import List from './List';

const breadcrumbs = [{ label: 'Services' }];

const ServiceListPage = ({
  services,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/services/new">
        <Button color="primary">Create new Service</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <List services={services}/>
    </PageContent>
  </Page>
);

export default enhance(ServiceListPage);
