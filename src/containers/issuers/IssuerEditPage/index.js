import { Button } from 'reactstrap';
import { object, func } from 'prop-types';
import { Link } from 'react-router';

import { IssuerForm, Page, PageContent, PageHeader } from 'src/components';
import { breadcrumbsType, issuerType } from 'src/prop-types';

import enhance from './enhance';


const propTypes = {
  issuer: issuerType.isRequired,
  validationErrors: object,
  breadcrumbs: breadcrumbsType.isRequired,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,
};

const IssuerEditPage = ({
  issuer,
  breadcrumbs,
  validationErrors,

  onDelete,
  onFieldChange,
}) => (
  <Page title={`Editing ${issuer.name}`}>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Button tag={Link} to="/issuers" color="success">Done</Button>
    </PageHeader>
    <PageContent>
      <IssuerForm
        onFieldChange={onFieldChange}
        validationErrors={validationErrors}
      />
      <Button color="danger" onClick={onDelete}>Delete</Button>
    </PageContent>
  </Page>
);

IssuerEditPage.propTypes = propTypes;

export default enhance(IssuerEditPage);
