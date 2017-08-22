import { Button } from 'reactstrap';
import { object, func } from 'prop-types';
import { Link } from 'react-router';

import { UserForm, Page, PageContent, PageHeader, PageFooter } from 'src/components';
import { breadcrumbsType, userType } from 'src/prop-types';

import enhance from './enhance';


const propTypes = {
  user: userType.isRequired,
  validationErrors: object,
  breadcrumbs: breadcrumbsType.isRequired,

  onDelete: func.isRequired,
  onFieldChange: func.isRequired,
};

const UserEditPage = ({
  user,
  breadcrumbs,
  validationErrors,

  onDelete,
  onFieldChange,
}) => (
  <Page title={`Editing ${user.name}`}>
    <PageHeader breadcrumbs={breadcrumbs} />
    <PageContent>
      <UserForm
        onFieldChange={onFieldChange}
        validationErrors={validationErrors}
      />
      <PageFooter>
        <Button color="danger" onClick={onDelete}>Delete</Button>
        <Button tag={Link} to="/users" color="success" className="float-right">Done</Button>
      </PageFooter>
    </PageContent>
  </Page>
);

UserEditPage.propTypes = propTypes;

export default enhance(UserEditPage);
