import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import makeBem from 'bem-cx';
import DashboardBar from '../../Dashboard/Bar/DashboardBar';
import DashboardLoader from '../../Dashboard/Content/DashboardLoader';
import ClientsViewItem from './ClientsViewItem';
import ClientsEmptyView from './ClientsEmptyView';
import { isLoading, isLoaded } from '../../../constants/loadingStatus';
// import Sticky from 'react-stickynode';
// import InfiniteScrolling from '../../Utilities/InfiniteScrolling';

const bem = makeBem('djavanDashboardContent');

const ClientsView = (
  { title,
    backLink,
    loadMoreItems,
    // clientClickHandler,
    props: {
      // currentUser,
      clients,
      clientsStatus,
      hasMore,
      loadingMore,
    },
  }
) =>
  <div>
    <Helmet title="Clients" titleTemplate="%s | Rhino Security Labs Djavan Security Assessment and Reporting System" />
    {/*currentUser && */<DashboardBar title="Clients" backLink={backLink} /*currentUser={currentUser}*/ />}

    <div className={bem.el('details').mod({ smallHeader: true, narrow: true })}>
      <DashboardLoader loading={isLoading(clientsStatus)} />
      {/*<Sticky enabled top={50} innerZ={999}>*/}
        {/*/!*{<StickyComponent />}*!/*/}
      {/*</Sticky>*/}
      {isLoaded(clientsStatus) && _.isEmpty(clients) && <ClientsEmptyView /*newClientClickHandler={newClientClickHandler}*/ />}
      {isLoaded(clientsStatus) && _.map(clients, (client, index) =>
        <ClientsViewItem key={index} /*clientClickHandler={clientClickHandler}*/ {...client} />)
      }
      {/*<InfiniteScrolling*/}
        {/*loadMore={loadMoreItems}*/}
        {/*loadingMore={loadingMore}*/}
        {/*hasMore={hasMore}*/}
      {/*/>*/}
    </div>
  </div>;

ClientsView.propTypes = {
  title: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
  // clientClickHandler: PropTypes.func.isRequired,
  // newClientClickHandler: PropTypes.func.isRequired,
  loadMoreItems: PropTypes.func.isRequired,
  props: PropTypes.shape({
    // currentUser: PropTypes.object.isRequired,
    clients: PropTypes.array.isRequired,
    clientsStatus: PropTypes.string.isRequired,
    hasMore: PropTypes.bool.isRequired,
    loadingMore: PropTypes.bool.isRequired,
  }),
};

export default ClientsView;
