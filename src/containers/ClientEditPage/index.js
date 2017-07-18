import { Button } from 'reactstrap';
import { arrayOf, object, func } from 'prop-types';

import { ClientForm, Page, PageContent, PageHeader } from 'src/components';
import { clientType, issuerType, userType, breadcrumbsType } from 'src/prop-types';

import enhance from './enhance';


const propTypes = {
  parents: arrayOf(clientType).isRequired,
  issuers: arrayOf(issuerType).isRequired,
  users: arrayOf(userType).isRequired,
  departmentClients: arrayOf(clientType).isRequired,
  client: clientType.isRequired,

  validationErrors: object,
  breadcrumbs: breadcrumbsType.isRequired,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,
  onRedirect: func.isRequired,
};

const ClientEditPage = ({
  parents,
  issuers,
  users,
  departmentClients,
  client,

  breadcrumbs,
  validationErrors,

  onDelete,
  onFieldChange,
  onRedirect,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageHeader>
    <PageContent>
      <ClientForm {...{
        parents,
        issuers,
        users,
        validationErrors,
        departmentClients,
        created: client.created,

        onRedirect,
        onFieldChange,
      }}
      />
    </PageContent>
  </Page>
);

ClientEditPage.propTypes = propTypes;

export default enhance(ClientEditPage);
