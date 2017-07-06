import { arrayOf } from 'prop-types';

import { Page, PageContent } from 'src/components';
import { toolType } from 'src/prop-types';

import enhance from './enhance';

const propTypes = {
  tools: arrayOf(toolType).isRequired,
};

const ToolListPage = ({ tools }) => (
  <Page>
    <PageContent>
      Tool list page placeholder. There are {tools.length} tools in the database.
    </PageContent>
  </Page>
);

ToolListPage.propTypes = propTypes;

export default enhance(ToolListPage);
