import { Page, PageContent, PageHeader, Button } from 'src/components';
import { Link } from 'react-router';

import { array, object, func } from 'prop-types';
import enhance from './enhance';
import ServiceList from './ServiceList';

const propTypes = {
  services: array.isRequired,
  assetsData: object.isRequired,

  onEdit: func.isRequired,
};

const breadcrumbs = [{ label: 'Services' }];

const ServiceListPage = ({
  services,
  assetsData,

  onEdit,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/services/new">
        <Button color="primary">Create new Service</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <ServiceList
        services={services}
        assetsData={assetsData}
        onEdit={onEdit}
      />
    </PageContent>
  </Page>
);

ServiceListPage.propTypes = propTypes;

export default enhance(ServiceListPage);
