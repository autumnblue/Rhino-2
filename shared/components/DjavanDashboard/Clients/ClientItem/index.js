import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClientItem from './ClientItem';

export default class Client extends Component {
    static proptTypes = {
        client: PropTypes.object.isRequired
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

    render() {
        const { toggle } = this.state;

        return (
            <ClientItem
                open={toggle}
                onToggle={() => this.onToggleClick()}
            />
        );
    }
}