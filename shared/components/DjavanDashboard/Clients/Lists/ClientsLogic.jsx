import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class ClientsLogic extends Component {
    state = {
        sort: null,
        sortOptions: []
    }
    
    componentDidMount() {
        this.state.sortOptions.push({ value: 1, label: 'One' });
        this.state.sortOptions.push({ value: 2, label: 'Two' });
    }

    onSortChange(obj) {
        this.setState({ sort: obj.value });
    }
    
    render() {
        const { sort, sortOptions } = this.state;

        return (
            <div>
                <Header
                    sort={sort}
                    sortOptions={sortOptions}
                    onSort={(value) => this.onSortChange(value)}
                />
                <List />
                <Footer />
            </div>
        );
    }
}

ClientsLogic.contextTypes = {
  router: PropTypes.object.isRequired,
};
