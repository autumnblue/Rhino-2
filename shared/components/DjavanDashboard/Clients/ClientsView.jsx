import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';
import makeBem from 'bem-cx';
import DashboardBar from '../../Dashboard/Bar/DashboardBar';
import DashboardLoader from '../../Dashboard/Content/DashboardLoader';
import ClientItemView from './ClientItem';
import ClientsEmptyView from './ClientsEmptyView';
import { isLoading, isLoaded } from '../../../constants/loadingStatus';
import Sticky from 'react-stickynode';
import InfiniteScrolling from '../../Utilities/InfiniteScrolling';

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
      umbrellasStatus,
      possibleUmbrellas,
      //fetchClient,
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
      {isLoaded(clientsStatus) && _.map(clients, (clientItem, index) =>
        <ClientItemView key={index} /*clientClickHandler={clientClickHandler}*/ possibleUmbrellas={possibleUmbrellas} clientItemObject={clientItem} clientItem={clientItem} />)
      }
      <InfiniteScrolling
        loadMore={loadMoreItems}
        loadingMore={loadingMore}
        hasMore={hasMore}
      />
    </div>
  </div>;


export default ClientsView;
