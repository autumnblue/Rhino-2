import { arrayOf, func, shape, string } from 'prop-types';
import { Link } from 'react-router';

import { Page, PageContent, PageHeader, Button } from 'src/components';
import { serviceOrderType } from 'src/prop-types';

import ServiceOrderList from './ServiceOrderList';
import ServiceOrderFilters from './ServiceOrderFilters';
import enhance from './enhance';

const propTypes = {
  serviceOrders: arrayOf(serviceOrderType).isRequired,
  filters: shape({
    contains: string,
  }).isRequired,
  onFiltersChange: func.isRequired,
};

const breadcrumbs = [{ label: 'service-orders' }];

const ServiceOrderListPage = ({
  serviceOrders,
  clientsData,
  filters,

  onFiltersChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/serviceOrders/new">
        <Button color="primary">Create new Service Order</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <ServiceOrderFilters onFiltersChange={onFiltersChange} initialValues={filters} />
      <ServiceOrderList
        clientsData={clientsData}
        serviceOrders={serviceOrders}
      />
    </PageContent>
  </Page>
);

ServiceOrderListPage.propTypes = propTypes;

export default enhance(ServiceOrderListPage);
