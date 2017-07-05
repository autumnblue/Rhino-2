import { Link } from 'react-router';
import { number, string, shape, arrayOf, object, func } from 'prop-types';
import { ClientForm, Page, PageContent, PageHeader, Button } from 'src/components';
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

  onFieldChange: func.isRequired,
};

const breadcrumbs = [{
  label: 'Clients',
  url: '/clients/list',
}, {
  label: 'New Client',
}];

const NewClientPage = ({
  parents,
  issuers,
  users,

  validationErrors,

  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/clients">
        <Button color="default">Cancel</Button>
      </Link>
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

NewClientPage.propTypes = propTypes;

export default enhance(NewClientPage);
