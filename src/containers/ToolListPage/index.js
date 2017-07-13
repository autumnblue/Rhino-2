import { arrayOf, func } from 'prop-types';
import { Link } from 'react-router';

import { Page, PageContent, PageHeader, Button } from 'src/components';
import { toolType } from 'src/prop-types';

import ToolList from './ToolList';
import enhance from './enhance';

const propTypes = {
  tools: arrayOf(toolType).isRequired,
  onEdit: func.isRequired,
};

const breadcrumbs = [{ label: 'Tools' }];

const ToolListPage = ({
  tools,
  onEdit,
}) => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs}>
      <Link to="/tools/new">
        <Button color="primary" disabled>Create new tool</Button>
      </Link>
    </PageHeader>
    <PageContent>
      <ToolList
        tools={tools}
        onEdit={onEdit}
      />
    </PageContent>
  </Page>
);

ToolListPage.propTypes = propTypes;

export default enhance(ToolListPage);
