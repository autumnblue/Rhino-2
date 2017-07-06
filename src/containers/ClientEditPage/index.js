import { Button } from 'reactstrap';
import { arrayOf, object, func } from 'prop-types';

import { ClientForm, Page, PageContent, PageHeader } from 'src/components';
import { clientType, issuerType, userType, breadcrumbsType } from 'src/prop-types';

import enhance from './enhance';


const propTypes = {
  parents: arrayOf(clientType).isRequired,
  issuers: arrayOf(issuerType).isRequired,
  users: arrayOf(userType).isRequired,

  validationErrors: object,
  breadcrumbs: breadcrumbsType.isRequired,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,
};

const ClientEditPage = ({
  parents,
  issuers,
  users,

  breadcrumbs,
  validationErrors,

  onDelete,
  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageHeader>
    <PageContent>
      <ClientForm
        onFieldChange={onFieldChange}
        parents={parents}
        issuers={issuers}
        users={users}
        validationErrors={validationErrors}
      />
    </PageContent>
  </Page>
);

ClientEditPage.propTypes = propTypes;

export default enhance(ClientEditPage);
