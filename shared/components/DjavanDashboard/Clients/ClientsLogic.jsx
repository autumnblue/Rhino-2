import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClientsView from './ClientsView';
import NotificationModal from '../../Utilities/NotificationModal';


export default class ClientsLogic extends Component {

  static propTypes = {
    // currentUser: PropTypes.object,
    clients: PropTypes.array.isRequired,
    loadingMore: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    clientsStatus: PropTypes.string.isRequired,
    loadData: PropTypes.func.isRequired,
    error: PropTypes.string,
    fetchPossibleUmbrellas: PropTypes.func.isRequired,
    umbrellasStatus: PropTypes.string,
    possibleUmbrellas: PropTypes.array.isRequired,
    clearClientError: PropTypes.func.isRequired,
  };

  state = {
    currentPage: 1,
  };

  componentWillMount() {

    if (this.props.clientsStatus !== 'loaded') {
      this.props.loadData(this.state.currentPage, false);
    }

    if (this.props.umbrellasStatus !== 'loaded') {
      this.props.fetchPossibleUmbrellas();
    }

    if (this.props.page > this.state.currentPage) {
      this.setState({ currentPage: this.props.page });
    }
  }

  componentWillUnmount() {
    // this.props.refreshClientsList();
  }

  title = 'Clients'
  backLink = ''


  loadMoreItems = async (options) => {
    if (options.previousPosition === 'below') {
      await this.setState({
        currentPage: this.state.currentPage + 1,
      });
      this.props.loadData(this.state.currentPage, true);
    }
  };


  render() {
    if (this.props.error) {
      return (
        <div>
          <NotificationModal clearError={this.props.clearClientError} message={this.props.error} />
          <ClientsView {...this} />
        </div>
      );
    }
    return <ClientsView {...this} />;
  }

}

ClientsLogic.contextTypes = {
  router: PropTypes.object.isRequired,
};
