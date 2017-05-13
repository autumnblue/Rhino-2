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
        // client: null,
        pm: 0,
        parent: 0,
        client: null,
    }

    componentWillMount() {
        this.setState({ client: this.props.client });
    }

    componentWillReceiveProps() {
        this.setState({ client: this.props.client });
    }

    handleChange(e, field) {
        let { client } = this.state;
        client[field] = e.target.value;
        this.setState({
            client: client
        });
    }

    handleDelete() {
        this.props.deleteClient(this.props.client.id);
    }

    handleFinish() {
        this.props.finishClient();
    }

    handlePMChange(value) {
      this.setState({ pm: value });
    }

    handleParentChange(value) {
      this.setState({ parent: value });
    }

    handleRow(rowInfo) {
        _.map(this.props.departments, (department, key) => {
            if (rowInfo.index == key && rowInfo.row.clientname == department.name) {
                this.props.viewClient(department);
                console.log('$$$$$$$$:  ', department);
                this.forceUpdate();
                // this.setState({ client: department });
                return;
            }
        });
    }

    handleUpdate(e, name) {
        let body = {};
        
        body["field"] = name;
        body["value"] = e.target.value;
        body["clientitem"] = this.props.client;
        this.props.updateClient(this.props.client.id, body);
    }

    render() {
        const { client, pm, parent } = this.state;

        if (isLoading(this.props.umbdepStatus) || isLoading(this.props.clientStatus)) {
            return (
                <DashboardLoader loading={isLoading(this.props.umbdepStatus)} />
            );
        } else {
            return (
                <ClientItem
                    client={client}
                    pm={pm}
                    parent={parent}
                    departments={this.props.departments}
                    umbrella={this.props.umbrella}
                    onChange={(e, field) => this.handleChange(e, field)}
                    onDelete={() => this.handleDelete()}
                    onFinish={() => this.handleFinish()}
                    onParent={(value) => this.handleParentChange(value)}
                    onPM={(value) => this.handlePMChange(value)}
                    onUpdate={(e, name) => this.handleUpdate(e, name)}
                    onRow={(rowInfo) => this.handleRow(rowInfo)}
                />
            );
        }
    }
}

const mapStateToProps = (state) => ({
    client: state.clients.client,
    departments: state.clients.departments,
    umbrella: state.clients.umbrella,
    clientStatus: state.clients.clientStatus,
    umbdepStatus: state.clients.umbdepStatus,
});

const mapDispatchToProps = (dispatch) => ({
    deleteClient: (client) => dispatch(ClientsActions.deleteClient(client)),
    finishClient: () => dispatch(push('/dashboard/clients/list')),
    updateClient: (id, val) => dispatch(ClientsActions.updateClient(id, val)),
    viewClient: (client) => dispatch(ClientsActions.viewClient(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);