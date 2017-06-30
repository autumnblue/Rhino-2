import enhance from './enhance';
import List from './List';

const ClientListPage = ({ clients }) => (
  <div>
  <div className="page-header">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item active">Clients</li>
      </ol>
      <h1 className="page-title">Clients</h1>
      <div className="page-header-actions">
        <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip" data-original-title="Edit">
          <i className="icon wb-pencil" aria-hidden="true" />
        </button>
        <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip" data-original-title="Refresh">
          <i className="icon wb-refresh" aria-hidden="true" />
        </button>
        <button type="button" className="btn btn-sm btn-icon btn-inverse btn-round" data-toggle="tooltip" data-original-title="Setting">
          <i className="icon wb-settings" aria-hidden="true" />
        </button>
      </div>
    </div>

    <List clients={clients} />
  </div>
);

export default enhance(ClientListPage);
