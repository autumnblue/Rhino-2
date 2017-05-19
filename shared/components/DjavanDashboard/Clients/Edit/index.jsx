import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Modal from 'react-modal';
import ClientsActions from '../../../../actions/clients';
import { isLoading, isLoaded } from '../../../../constants/loadingStatus';
import DashboardLoader from '../../../Dashboard/Content/DashboardLoader';
import ClientItem from './ClientItem';

class Client extends Component {
    state = {
        pm: 0,
        parent: 0,
        client: null,
        
        parents: [],
        pms: [],
        deparments: [],

        isOpen: false,
    }

    componentWillMount() {
        this.setState({ client: this.props.client });

        let parents = [];
        parents.push({ id: 0, label: 'None' });
        if (this.props.umbrella !== null) {
            parents.push({ id: this.props.umbrella.id, label: this.props.umbrella.name });
        }
        this.setState({ parents: parents });

        let pms = [];
        pms.push({ id: 0, label: "Default_PM" });
        if (this.props.client.project_manager !== null) {
            pms.push({ id: 1, label: this.props.client.project_manager.first_name + " " + this.props.client.project_manager.last_name });
        }
        this.setState({ pms: pms });

        let departments = [];

        _.map(this.props.client.departments, (department, key) =>
            departments.push({
                clientname: department.name,
                focalname: department.focal_name,
                socount: department.service_order_count,
                asscount: department.assessment_count
            })
        );
        this.setState({ departments: departments });
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

    handleCloseModal(value) {
        if (value) {
            this.props.deleteClient(this.props.client.id);
        }
        this.setState({ isOpen: false });
    }

    handleDelete() {
        this.setState({ isOpen: true });
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
        _.map(this.props.client.departments, (department, key) => {
            if (rowInfo.index == key && rowInfo.row.clientname == department.name) {
                this.props.viewClient(department);
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
        const { isOpen, client, pm, pms, parent, parents, departments } = this.state;

        if (isLoading(this.props.clientStatus)) {
            return (
                <DashboardLoader loading={isLoading(this.props.umbdepStatus)} />
            );
        } else {
            return (
                <div>
                    <ClientItem
                        client={client}
                        pm={pm}
                        parent={parent}
                        departments={departments}
                        parents={parents}
                        pms={pms}
                        umbrella={this.props.umbrella}
                        onChange={(e, field) => this.handleChange(e, field)}
                        onDelete={() => this.handleDelete()}
                        onFinish={() => this.handleFinish()}
                        onParent={(value) => this.handleParentChange(value)}
                        onPM={(value) => this.handlePMChange(value)}
                        onUpdate={(e, name) => this.handleUpdate(e, name)}
                        onRow={(rowInfo) => this.handleRow(rowInfo)}
                    />
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={() => this.handleCloseModal()}
                        closeTimeoutMS={2}
                        shouldCloseOnOverlayClick={false}
                        contentLabel="No Overlay Click Modal"
                        className="modalBase"
                        overlayClassName="modalOverlay"
                        >

                        <h1>Confirm Deletion</h1>

                        <button onClick={() => this.handleCloseModal(true)}>Ok</button>
                        <button onClick={() => this.handleCloseModal(false)}>Cancel</button>
                    </Modal>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    client: state.clients.client,
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