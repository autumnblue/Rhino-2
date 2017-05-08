import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';
import makeBem from 'bem-cx';
import DashboardBar from '../../../Dashboard/Bar/DashboardBar';
import DashboardLoader from '../../../Dashboard/Content/DashboardLoader';
import ClientsEmptyView from './ClientsEmptyView';
import ClientItem from './ClientItem';
import { isLoading, isLoaded } from '../../../../constants/loadingStatus';
import Sticky from 'react-stickynode';
import InfiniteScrolling from '../../../Utilities/InfiniteScrolling';

const bem = makeBem('djavanDashboardContent');

const ClientsView = (props) =>
  <div>
    <Helmet title={props.title} titleTemplate="%s | Rhino Security Labs Djavan Security Assessment and Reporting System" />
    <DashboardBar title={props.title} backLink={props.backLink} />

    <div className={bem.el('details').mod({ smallHeader: true, narrow: true })}>
      <DashboardLoader loading={isLoading(props.clientsStatus)} />
      {isLoaded(props.clientsStatus) && _.map(props.clients, (clientItem, index) =>
        <ClientItem key={index} clientItem={clientItem} />)
      }
      <InfiniteScrolling
        loadMore={props.loadMoreItems}
        loadingMore={props.loadingMore}
        hasMore={props.hasMore}
      />
    </div>
  </div>;

export default ClientsView;
