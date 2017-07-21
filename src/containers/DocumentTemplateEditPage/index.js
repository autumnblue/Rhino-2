import { Button } from 'reactstrap';
import { object, func, arrayOf } from 'prop-types';

import { DocumentTemplateForm, Page, PageContent, PageHeader } from 'src/components';
import { breadcrumbsType, issuerType, documentTemplateType } from 'src/prop-types';

import enhance from './enhance';


const propTypes = {
  breadcrumbs: breadcrumbsType.isRequired,
  categories: object.isRequired,
  issuers: arrayOf(issuerType).isRequired,
  documentTemplate: documentTemplateType.isRequired,
  validationErrors: object.isRequired,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,
};

const DocumentTemplateEditPage = ({
  breadcrumbs,
  categories,
  issuers,
  documentTemplate,
  validationErrors,

  onDelete,
  onFieldChange,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageHeader>
    <PageContent>
      <DocumentTemplateForm
        created={documentTemplate.created}
        modified={documentTemplate.last_modified}
        categories={categories}
        issuers={issuers}
        validationErrors={validationErrors}
        onFieldChange={onFieldChange}
      />
    </PageContent>
  </Page>
);

DocumentTemplateEditPage.propTypes = propTypes;

export default enhance(DocumentTemplateEditPage);
