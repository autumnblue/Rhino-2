import { Button } from 'reactstrap';
import { object, func, arrayOf, objectOf } from 'prop-types';
import { Link } from 'react-router';

import {
  ServiceOrderForm,
  Page,
  PageContent,
  PageHeader,
} from 'src/components';
import { breadcrumbsType, clientType, userType, industryType, focalProfileType, serviceOrderType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  breadcrumbs: breadcrumbsType.isRequired,
  choices: object.isRequired,
  clients: arrayOf(clientType).isRequired,
  users: arrayOf(userType).isRequired,
  industries: arrayOf(industryType).isRequired,
  focalProfiles: arrayOf(focalProfileType).isRequired,
  usersData: objectOf(userType).isRequired,
  serviceOrder: serviceOrderType.isRequired,
  validationErrors: object.isRequired,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,
};

const ServiceOrderEditPage = ({
  breadcrumbs,
  choices,
  clients,
  users,
  industries,
  focalProfiles,
  usersData,
  serviceOrder,
  validationErrors,

  onDelete,
  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button tag={Link} to="/service-orders" color="success">Done</Button>
    </PageHeader>
    <PageContent>
      <ServiceOrderForm {...{
        created: serviceOrder.created,
        validationErrors,
        breadcrumbs,
        clients,
        users,
        industries,
        focalProfiles,
        usersData,
        choices,

        onFieldChange,
      }}
      />
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageContent>
  </Page>
);

ServiceOrderEditPage.propTypes = propTypes;

export default enhance(ServiceOrderEditPage);
