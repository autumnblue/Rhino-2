import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ClientsActions from '../../../../actions/clients';
import { isLoading, isLoaded } from '../../../../constants/loadingStatus';
import DashboardLoader from '../../../Dashboard/Content/DashboardLoader';
import ClientItem from './ClientItem';

class Client extends Component {
    state = {
        umbrella: 9999,
        issuer: 9999,
        client: {},
    }

    componentDidMount() {
        let issuers = [];

        issuers.push({ value: 9999, label: "None" });

        _.map(this.props.clients, (client, key) => {
            issuers.push({ value: client.id, label: client.name });
        });

        this.setState({ issuers: issuers });
    }

    handleAdd(event) {
        event.preventDefault();

        let { client } = this.state;
        if (client["name"] && client["short_name"] && client["url"] && client["hourly_rate"] && client["address"] && client["focal_name"] && client["focal_title"] && client["focal_phone"] && client["focal_email"] && client["issuer"]) {
            client["commit"] = "true";
        } else {
            client["commit"] = "false";
        }
        this.props.createClient(client);
    }

    handleUpdate(e, field) {
        let { client } = this.state;
        if (field == "commit") {
            client[field] = e.target.checked;
        } else if (field == "umbrella") {
            if (e == null) return;
            if (e.value == 9999) {
                client[field] = null;
            } else {
                client[field] = e.value;
            }
            this.setState({ umbrella: e.value });
            console.log(client);
        } else if (field == "issuer") {
            if (e == null) return;
            if (e.value == 9999) {
                client[field] = null;
            } else {
                client[field] = e.value;
            }
            this.setState({ issuer: e.value });
            console.log(client);
        } else {
            if (e.target.value == "") {
                delete client[field];
            } else {
                client[field] = e.target.value;
            }
        }
        this.setState({ client: client });
    }

    render() {
        return (
            <ClientItem
                clients={this.props.clients}
                issuer={this.state.issuer}
                issuers={this.state.issuers}
                umbrella={this.state.umbrella}
                onAdd={(event) => this.handleAdd(event)}
                onUpdate={(e, name) => this.handleUpdate(e, name)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    clients: state.clients.clients,
});

const mapDispatchToProps = (dispatch) => ({
    createClient: (client) => dispatch(ClientsActions.createClient(client)),
    updateClient: (id, val) => dispatch(ClientsActions.updateClient(id, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);