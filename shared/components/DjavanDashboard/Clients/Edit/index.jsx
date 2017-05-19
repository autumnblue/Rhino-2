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

    componentDidMount() {
        if (this.props.client) {
            this.setState({ 
                client: this.props.client ,
                clients: this.props.clients,
                umbrella: this.props.umbrella,
            });

            localStorage.setItem("client", JSON.stringify(this.props.client));
            localStorage.setItem("clients", JSON.stringify(this.props.clients));
            localStorage.setItem("umbrella", JSON.stringify(this.props.umbrella));

            this.handleUpdateState(this.props.client, this.props.clients, this.props.umbrella);
        } else {
            let client, clients, umbrella;
            client = JSON.parse(localStorage.getItem('client'));
            clients = JSON.parse(localStorage.getItem('clients')),
            umbrella = JSON.parse(localStorage.getItem('umbrella')),

            this.setState({
                client: client,
                clients: clients,
                umbrella: umbrella,
            });

            this.handleUpdateState(client, clients, umbrella);
        }
    }

    handleUpdateState(client, clients, umbrella) {
        let parents = [];
        parents.push({ id: null, label: 'N/A' });
        _.map(clients, (item, key) => {
            if (client.id !== item.id) {
                if (item.umbrella) {
                    if (item.id == item.umbrella.id) {
                        parents.push({ id: item.id, label: item.name });
                    }
                } else {
                    parents.push({ id: item.id, label: item.name });
                }
            }
        });
        this.setState({ parents: parents });

        if (client.umbrella) {
            if (client.id == client.umbrella.id) {
                this.setState({ parent: "N/A" });
            } else {
                this.setState({ parent: client.umbrella.id });
            }
        } else {
            this.setState({ parent: "N/A" });
        }


        let pms = [];
        pms.push({ id: 0, label: "Default_PM" });
        if (client.project_manager !== null) {
            pms.push({ id: 1, label: client.project_manager.first_name + " " + client.project_manager.last_name });
        }
        this.setState({ pms: pms });


        let departments = [];
        _.map(client.departments, (department, key) =>
            departments.push({
                clientname: department.name,
                focalname: department.focal_name,
                socount: department.service_order_count,
                asscount: department.assessment_count
            })
        );
        this.setState({ departments: departments });
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
            this.props.deleteClient(this.state.client.id);
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
        _.map(this.state.client.departments, (department, key) => {
            if (rowInfo.row.clientname == department.name) {
                let departments = [];
                _.map(department.departments, (dep, key) =>
                    departments.push({
                        clientname: dep.name,
                        focalname: dep.focal_name,
                        socount: dep.service_order_count,
                        asscount: dep.assessment_count
                    })
                );
                this.setState({ departments: departments });

                department["path"] = this.state.client.name + "    >    " + department.name;

                this.props.viewClient(department);
                this.setState({ client: department });

                return;
            }
        });
    }

    handleUpdate(e, name) {
        let body = {};
        
        body["field"] = name;
        if (e.target.value == 'N/A') {
            body["value"] = null;
        } else {
            body["value"] = e.target.value;
        }
        
        body["clientitem"] = this.state.client;
        this.props.updateClient(this.state.client.id, body);
    }

    render() {
        const { isOpen, client, pm, pms, parent, parents, departments, umbrella } = this.state;

        if (client == null) {
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
                        umbrella={umbrella}
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
    clients: state.clients.clients,
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