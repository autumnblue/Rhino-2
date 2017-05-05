import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';
import makeBem from 'bem-cx';
import DashboardBar from '../../Dashboard/Bar/DashboardBar';
import DashboardLoader from '../../Dashboard/Content/DashboardLoader';
import ClientItemView from './ClientItem';
import ClientsEmptyView from './ClientsEmptyView';
import Client from './Client';
import { isLoading, isLoaded } from '../../../constants/loadingStatus';
import Sticky from 'react-stickynode';
import InfiniteScrolling from '../../Utilities/InfiniteScrolling';

const bem = makeBem('djavanDashboardContent');

const ClientsView = (props) =>
  <div>
    <Helmet title={props.title} titleTemplate="%s | Rhino Security Labs Djavan Security Assessment and Reporting System" />
    <DashboardBar title={props.title} backLink={props.backLink} />

    <div className={bem.el('details').mod({ smallHeader: true, narrow: true })}>
      <DashboardLoader loading={isLoading(props.clientsStatus)} />
      {isLoaded(props.clientsStatus) && _.isEmpty(props.clients) && <ClientsEmptyView />}
      {isLoaded(props.clientsStatus) && _.map(props.clients, (clientItem, index) =>
        <ClientItemView key={index} possibleUmbrellas={props.possibleUmbrellas} clientItemObject={clientItem} clientItem={clientItem} />)
      }
      {isLoaded(props.clientsStatus) && _.map(props.clients, (clientItem, index) =>
        <Client key={index} clientItem={clientItem} />)
      }
      <InfiniteScrolling
        loadMore={props.loadMoreItems}
        loadingMore={props.loadingMore}
        hasMore={props.hasMore}
      />
    </div>
  </div>;

export default ClientsView;
