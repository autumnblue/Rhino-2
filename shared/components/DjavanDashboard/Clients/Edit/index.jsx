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

    handlePMChange(value) {
      this.setState({ pm: value });
    }

    handleParentChange(value) {
      this.setState({ parent: value });
    }

    handleDelete() {

    }

    handleRow(rowInfo) {
        _.map(this.props.departments, (department, key) => {
            if (rowInfo.index == key && rowInfo.row.clientname == department.name) {
                this.props.viewClient(department);
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
        const { pm, parent } = this.state;

        if (isLoading(this.props.umbdepStatus) || isLoading(this.props.clientStatus)) {
            return (
                <DashboardLoader loading={isLoading(this.props.umbdepStatus)} />
            );
        } else {
            return (
                <ClientItem
                    client={this.props.client}
                    pm={pm}
                    parent={parent}
                    departments={this.props.departments}
                    umbrella={this.props.umbrella}
                    onDelete={() => this.handleDelete()}
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
    updateClient: (id, val) => dispatch(ClientsActions.updateClient(id, val)),
    viewClient: (client) => dispatch(ClientsActions.viewClient(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);