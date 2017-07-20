import { Link } from 'react-router';
import { object, func } from 'prop-types';

import { ToolForm, Page, PageContent, PageHeader, Button } from 'src/components';

import enhance from './enhance';

const propTypes = {
  validationErrors: object,

  onFieldChange: func.isRequired,
};

const breadcrumbs = [{
  label: 'Clients',
  url: '/clients',
}, {
  label: 'New Client',
}];

const ToolCreatePage = ({
  validationErrors,

  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/tools">
        <Button color="default">Cancel</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <ToolForm
        isNew
        onFieldChange={onFieldChange}
        validationErrors={validationErrors}
      />
    </PageContent>
  </Page>
);

ToolCreatePage.propTypes = propTypes;

export default enhance(ToolCreatePage);
