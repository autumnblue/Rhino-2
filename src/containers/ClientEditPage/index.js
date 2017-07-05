import { Button } from 'reactstrap';
import { shape, arrayOf, string, number, object, func } from 'prop-types';
import { ClientForm, Page, PageContent, PageHeader } from 'src/components';
import enhance from './enhance';


const propTypes = {
  parents: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
  })).isRequired,
  issuers: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
  })).isRequired,
  users: arrayOf(shape({
    id: number.isRequired,
    first_name: string.isRequired,
    last_name: string.isRequired,
  })).isRequired,

  validationErrors: object,
  breadcrumbs: arrayOf(shape({
    label: string.isRequired,
    url: string,
  })).isRequired,

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
