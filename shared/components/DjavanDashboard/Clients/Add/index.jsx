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
        address: null,
        commit: null,
        focal_email: null,
        focal_name: null,
        focal_phone: null,
        focal_title: null,
        hourly_rate: null,
        issuer: null,
        name: null,
        notes: null,
        project_manager: null,
        short_name: null,
        umbrella: null,
        url: null,
    }

    componentDidMount() {
        this.setState({
            address: "fftesf",
            commit: "true",
            focal_email: "ggg@ggg.com",
            focal_name: "ggg",
            focal_phone: "44335765",
            focal_title: "ggg",
            hourly_rate: "222",
            issuer: 2,
            name: "ggg",
            notes: "ggg",
            project_manager: 2,
            short_name: "ggg",
            umbrella: 2,
            url: "http://ggg.com",
        });
    }

    handleAdd() {
        const { address, commit, focal_email, focal_name, focal_phone, focal_title, hourly_rate, issuer, name, notes, project_manager, short_name, umbrella, url } = this.state;

        let client = {};
        client["address"] = address;
        client["commit"] = commit;
        client["focal_email"] = focal_email;
        client["focal_name"] = focal_name;
        client["focal_phone"] = focal_phone;
        client["focal_title"] = focal_title;
        client["hourly_rate"] = hourly_rate;
        client["issuer"] = issuer;
        client["name"] = name;
        client["notes"] = notes;
        client["project_manager"] = project_manager;
        client["short_name"] = short_name;
        client["umbrella"] = umbrella;
        client["url"] = url;

        this.props.createClient(client);
    }

    handleUpdate(e, name) {
        // let body = {};
        
        // body["field"] = name;
        // body["value"] = e.target.value;
        // body["clientitem"] = this.props.client;

        if (name == "address") {
            this.setState({ address: e.target.value });
        } else if (name == "commit") {
            this.setState({ commit: e.target.value });
        } else if (name == "focal_email") {
            this.setState({ focal_email: e.target.value });
        } else if (name == "focal_name") {
            this.setState({ focal_name: e.target.value });
        } else if (name == "focal_phone") {
            this.setState({ focal_phone: e.target.value });
        } else if (name == "focal_title") {
            this.setState({ focal_title: e.target.value });
        } else if (name == "hourly_rate") {
            this.setState({ hourly_rate: e.target.value });
        } else if (name == "notes") {
            this.setState({ notes: e.target.value });
        } else if (name == "project_manager") {
            this.setState({ project_manager: e.target.value });
        } else if (name == "short_name") {
            this.setState({ short_name: e.target.value });
        } else if (name == "umbrella") {
            this.setState({ umbrella: e.target.value });
        } else if (name == "url") {
            this.setState({ url: e.target.value });
        }

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