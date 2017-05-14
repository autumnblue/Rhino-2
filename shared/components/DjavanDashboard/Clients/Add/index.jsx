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
        client: {},
    }

    handleAdd() {
        let { client } = this.state;

        client["commit"] = "true";
        client["issuer"] = 2;
        client["umbrella"] = 2;

        this.props.createClient(client);
    }

    handleUpdate(e, field) {
        let { client } = this.state;
        client[field] = e.target.value;
        this.setState({ client: client });
    }

    render() {
        return (
            <ClientItem
                onAdd={() => this.handleAdd()}
                onUpdate={(e, name) => this.handleUpdate(e, name)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    client: state.clients.client,
});

const mapDispatchToProps = (dispatch) => ({
    createClient: (client) => dispatch(ClientsActions.createClient(client)),
    updateClient: (id, val) => dispatch(ClientsActions.updateClient(id, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);