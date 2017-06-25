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
        client: {},
        isOpen: false,
        messages: [],
    }

    constructor(props) {
        super(props);

        this.state = {
            client: {},
        isOpen: false,
        messages: [],
        }
    }

    componentWillMount() {
        let issuers = [];

        issuers.push({ id: '', label: "Choose a issuer" });
        _.map(this.props.clients, (client, key) => {
            issuers.push({ id: client.id, label: client.name });
        });

        this.setState({ issuers: issuers });
    }

    handleCloseModal() {
        this.setState({ isOpen: false });
    }

    handleAdd(event) {
        event.preventDefault();

        let { client } = this.state;
        if (client["name"] && client["short_name"] && client["url"] && client["hourly_rate"] && client["address"] && client["focal_name"] && client["focal_title"] && client["focal_phone"] && client["focal_email"] && client["issuer"]) {
            client["commit"] = "true";
        } else {
            client["commit"] = "false";
        }

        this.props.createClient(client)
            .then((response) => {
                if (response.status) {
                    let errors = [];
                    _.map(response.body, (object, key) => {
                        _.map(object, (message, key) => {
                            errors.push(message);
                        });
                    });
                    this.setState({ messages: errors });
                    this.setState({ isOpen: true });
                }
            });
    }

    handleUpdate(e, field) {
        let { client } = this.state;

        if (field == "focal_phone") {
            client[field] = e.target.value.replace(/[()-.]/g, '');
        } else if (field == "issuer") {
            if (e.target.value == '') {
                delete client.issuer;
            } else {
                client[field] = parseInt(e.target.value);
            }
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
        const { isOpen, issuers, messages } = this.state;

        return (
            <div>
                <ClientItem
                    clients={this.props.clients}
                    issuers={issuers}
                    onAdd={(event) => this.handleAdd(event)}
                    onUpdate={(e, name) => this.handleUpdate(e, name)}
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

                    <h1>Warning</h1>

                    {
                        _.map(messages, (message, key) => {
                            return (
                                <p key={key}>{message}</p>
                            )
                        })
                    }
                    <button onClick={() => this.handleCloseModal()}>Close Modal...</button>
                </Modal>
            </div>
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