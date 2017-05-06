import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClientItem from './ClientItem';


export default class Client extends Component {
    static proptTypes = {
        clientItem: PropTypes.object.isRequired
    };

    state = {
        toggle: false,
    }


    onToggleClick() {
        const { toggle } = this.state;

        if (toggle) {
            this.setState({ toggle: false });
        } else {
            this.setState({ toggle: true });
        }
    }

    onPMChange(value) {
        console.log('$$$: ', value);
    }

    onDelete() {
        console.log('$$$: ');
    }

    render() {
        const { toggle } = this.state;
        console.log(this.props.clientItem)

        return (
            <ClientItem
                open={toggle}
                client={this.props.clientItem}
                onToggle={() => this.onToggleClick()}
                delete={() => this.onDelete()}
            />
        );
    }
}