import { Page, PageContent, PageHeader, Button } from 'src/components';
import { Link } from 'react-router';

import { array, object, func } from 'src/prop-types';
import enhance from './enhance';
import List from './List';

const propTypes = {
  services: array.isRequired,
  assets: object.isRequired,

  onEdit: func.isRequired,
};

const breadcrumbs = [{ label: 'Services' }];

const ServiceListPage = ({
  services,
  assets,

  onEdit,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/services/new">
        <Button color="primary">Create new Service</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <List services={services} assets={assets} onEdit={onEdit} />
    </PageContent>
  </Page>
);

ServiceListPage.propTypes = propTypes;

export default enhance(ServiceListPage);
