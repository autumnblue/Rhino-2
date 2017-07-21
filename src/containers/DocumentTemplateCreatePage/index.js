import { Link } from 'react-router';
import { object, func, arrayOf } from 'prop-types';

import { Page, PageContent, PageHeader, Button, DocumentTemplateForm } from 'src/components';
import { issuerType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  categories: object.isRequired,
  issuers: arrayOf(issuerType).isRequired,
  validationErrors: object.isRequired,

  onFieldChange: func.isRequired,
};

const breadcrumbs = [{
  label: 'Document Templates',
  url: '/document-templates',
}, {
  label: 'New Template',
}];

const DocumentTemplateCreatePage = ({
  categories,
  issuers,
  validationErrors,

  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/document-templates">
        <Button color="default">Cancel</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <DocumentTemplateForm
        categories={categories}
        issuers={issuers}
        validationErrors={validationErrors}

        onFieldChange={onFieldChange}
      />
    </PageContent>
  </Page>
);

DocumentTemplateCreatePage.propTypes = propTypes;

export default enhance(DocumentTemplateCreatePage);
