import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientsActions from '../../../../../actions/clients';

import ClientItem from './ClientItem';


class Client extends Component {
    static proptTypes = {
        clientItem: PropTypes.object.isRequired
    };

    state = {
        toggle: false,
        option: 0,
    }

    onToggleClick() {
        const { toggle } = this.state;

        if (toggle) {
            this.setState({ toggle: false });
        } else {
            this.setState({ toggle: true });
        }
    }

    onOptionChanged(e, selectedIndex, menuItem) {
        this.setState({ option: selectedIndex });
    }

    onDelete() {
        console.log('$$$: ');
    }

    onUpdateField(e, name) {
        let body = {};
        body["field"] = name;
        body["value"] = e.target.value;
        body["clientitem"] = this.props.clientItem;
        this.props.updateClient(this.props.clientItem.id, body);
    }

    render() {
        const { option, toggle } = this.state;
        
        return (
            <ClientItem
                open={toggle}
                client={this.props.clientItem}
                option={option}
                options={['AM', 'PM']}
                onDelete={() => this.onDelete()}
                onToggle={() => this.onToggleClick()}
                onOptions={(e, selectedIndex, menuItem) => this.onOptionChanged(e, selectedIndex, menuItem)}
                onUpdateField={(e, name) => this.onUpdateField(e, name)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.clientitems.error
});

const mapDispatchToProps = (dispatch) => ({
    updateClient: (id, val) => dispatch(ClientsActions.updateClient(id, val))
});

export default connect(mapStateToProps, mapDispatchToProps)(Client);