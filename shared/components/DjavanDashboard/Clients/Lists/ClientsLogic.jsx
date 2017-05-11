import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class ClientsLogic extends Component {
    state = {
        sort: null,
        sortOptions: null,
        display: 10,
        displayOptions: null,
        ativePage: 1,
    }

    componentWillMount() {
        this.props.loadData(1, 10, false);
    }
    
    componentDidMount() {
        var sorts = [];
        sorts.push({ value: 0, label: "Date Created" });
        sorts.push({ value: 1, label: "Company Name" });
        sorts.push({ value: 2, label: "Focal Name" });
        sorts.push({ value: 3, label: "Number of Service Orders" });
        sorts.push({ value: 4, label: "Number of Assessments" });
        this.setState({ sortOptions: sorts });

        var displays = [];
        displays.push({ value: 10, label: "Display 10" });
        displays.push({ value: 50, label: "Display 50" });
        displays.push({ value: 100, label: "Display 100" });
        displays.push({ value: 200, label: "Display All" });
        this.setState({ displayOptions: displays });
    }

    handleSortChange(obj) {
        this.setState({ sort: obj.value });
    }

    handleDisplayChange(obj) {
        this.setState({ display: obj.value });
    }

    handleFilterChange(e) {
        console.log(e.target.value);
    }

    handlePageChange(value) {
        const { display } = this.state;

        this.setState({ activePage: value });
        this.props.loadData(value, display, false);
    }

    handleSelect(value) {
        this.props.viewClient(value);
    }
    
    render() {
        const { sort, sortOptions, display, displayOptions, activePage } = this.state;

        return (
            <div>
                <Header
                    sort={sort}
                    sortOptions={sortOptions}
                    onSort={(value) => this.handleSortChange(value)}
                    display={display}
                    displayOptions={displayOptions}
                    onDisplay={(value) => this.handleDisplayChange(value)}
                    onFilter={(value) => this.handleFilterChange(value)}
                />
                <List
                    clients={this.props.clients}
                    onSelect={(client) => this.handleSelect(client)}
                />
                <Footer 
                    activePage={activePage}
                    countPerPage={10}
                    totalItemsCount={450}
                    rangeDisplayed={5}
                    onPage={(value) => this.handlePageChange(value)}
                />
            </div>
        );
    }
}

ClientsLogic.contextTypes = {
  router: PropTypes.object.isRequired,
};
