import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import ClientsActions from '../../../../actions/clients';
import { isLoading, isLoaded } from '../../../../constants/loadingStatus';
import DashboardLoader from '../../../Dashboard/Content/DashboardLoader';
import ClientItem from './ClientItem';

class Client extends Component {
    state = {
        pm: 0,
        parent: 0,
    }

    handleUpdate(e, name) {
        let body = {};
        
        body["field"] = name;
        body["value"] = e.target.value;
        body["clientitem"] = this.props.client;

        this.props.updateClient(this.props.client.id, body);
    }

    render() {
        return (
            <ClientItem
                onUpdate={(e, name) => this.handleUpdate(e, name)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    client: state.clients.client,
});

const mapDispatchToProps = (dispatch) => ({
    updateClient: (id, val) => dispatch(ClientsActions.updateClient(id, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);