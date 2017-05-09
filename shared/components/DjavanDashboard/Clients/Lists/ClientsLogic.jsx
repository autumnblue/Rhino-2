import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class ClientsLogic extends Component {
    state = {
        sort: []
    }
    
    componentDidMount() {
        this.state.sort.push({ value: 'one', label: 'One' });
        this.state.sort.push({ value: 'two', label: 'Two' });
        console.log(this.state.sort);
    }

    onSortChange(value) {
        console.log(value);
    }
    
    render() {
        const { sort } = this.state;

        return (
            <div>
                <Header
                    sort={sort}
                    onSort={() => this.onSortChange()}
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
