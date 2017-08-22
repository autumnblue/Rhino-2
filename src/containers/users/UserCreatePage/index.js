import { Link } from 'react-router';
import { object, func } from 'prop-types';

import { Page, PageContent, PageHeader, Button, UserForm } from 'src/components';

import enhance from './enhance';

const propTypes = {
  validationErrors: object,

  onFieldChange: func.isRequired,
};

const breadcrumbs = [{
  label: 'Users',
  url: '/users',
}, {
  label: 'New User',
}];

const ToolCreatePage = ({
  validationErrors,

  onFieldChange,
}) => (
  <Page title="New User">
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/users">
        <Button color="default">Cancel</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <UserForm
        onFieldChange={onFieldChange}
        validationErrors={validationErrors}
      />
    </PageContent>
  </Page>
);

ToolCreatePage.propTypes = propTypes;

export default enhance(ToolCreatePage);
