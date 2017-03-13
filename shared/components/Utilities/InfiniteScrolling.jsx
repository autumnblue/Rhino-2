import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import DashboardLoader from '../Dashboard/Content/DashboardLoader';

const InfiniteScrolling = ({ loadMore, loadingMore, hasMore }) =>
  (<div>
    {!loadingMore && hasMore ?
      (<Waypoint
        onEnter={(options) => loadMore(options)}
        bottomOffset="-500px"
        topOffset="-500px"
      />) :
      (<div>
        {hasMore && <DashboardLoader loading={loadingMore} size={50} top={20} />}
      </div>)
    }
  </div>);

InfiniteScrolling.propTypes = {
  loadMore: PropTypes.func.isRequired,
  loadingMore: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default InfiniteScrolling;
