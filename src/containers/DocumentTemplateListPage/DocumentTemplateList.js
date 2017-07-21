import { Table } from 'reactstrap';
import { pure } from 'recompose';
import { arrayOf, object } from 'prop-types';
import moment from 'moment';

import { EntityLink } from 'src/components';
import { documentTemplateType } from 'src/prop-types';


const propTypes = {
  documentTemplates: arrayOf(documentTemplateType).isRequired,
  categories: object.isRequired,
};

const formatTime = time => moment(time).format('h:mm:ss a MM/DD/YY');

const enhance = pure;

const DocumentTemplateList = ({
  documentTemplates,
  categories,
}) => (
  <Table striped>
    <tbody>
      {documentTemplates.map(({
        id,
        category,
        issuer,
        created,
        modified,
        description,
      }) => (
        <tr key={id}>
          <td>
            {categories[category]}
            <br /><br />
            Issuer: {issuer.name}
          </td>
          <td>
            Created: {formatTime(created)}
            <br /><br />
            Modified: {formatTime(modified)}
          </td>
          <td>
            {description}
          </td>
          <td>
            <EntityLink to={`/document-templates/${id}`} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

DocumentTemplateList.propTypes = propTypes;

export default enhance(DocumentTemplateList);
