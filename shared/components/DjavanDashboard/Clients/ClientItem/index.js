import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClientItem from './ClientItem';


export default class Client extends Component {
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

    render() {
        const { option, toggle } = this.state;

        return (
            <ClientItem
                open={toggle}
                client={this.props.clientItem}
                option={option}
                options={['AM', 'PM']}
                onToggle={() => this.onToggleClick()}
                onOptions={(e, selectedIndex, menuItem) => this.onOptionChanged(e, selectedIndex, menuItem)}
                delete={() => this.onDelete()}
            />
        );
    }
}