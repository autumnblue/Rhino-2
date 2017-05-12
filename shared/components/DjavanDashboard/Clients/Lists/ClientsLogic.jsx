import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class ClientsLogic extends Component {

    componentWillMount() {
        var sorts = [];
        sorts.push({ value: "id", label: "Date Created" });
        sorts.push({ value: "id", label: "Company Name" });
        sorts.push({ value: "name", label: "Focal Name" });
        sorts.push({ value: "id", label: "Number of Service Orders" });
        sorts.push({ value: "id", label: "Number of Assessments" });

        var limits = [];
        limits.push({ value: 10, label: "Display 10" });
        limits.push({ value: 50, label: "Display 50" });
        limits.push({ value: 100, label: "Display 100" });
        limits.push({ value: 200, label: "Display All" });

        this.setState({
            activePage: 1,
            sort: "id",
            limit: 10,
            filter: "",

            sortOptions: sorts,
            limitOptions: limits,
        });
    }
    
    componentDidMount() {
        const { activePage, sort, limit, filter } = this.state;
        this.props.loadData(activePage, sort, limit, filter, false);
    }

    handleSortChange(obj) {
        const { activePage, sort, limit, filter } = this.state;
        if (obj == null) return;
        this.setState({ sort: obj.value });
        this.props.loadData(activePage, obj.value, limit, filter);
    }

    handleDisplayChange(obj) {
        const { activePage, sort, limit, filter } = this.state;
        this.setState({ limit: obj.value });
        this.props.loadData(activePage, sort, obj.value, filter);
    }

    handleFilterChange(e) {
        const { activePage, sort, limit, filter } = this.state;
        this.setState({ filter: e.target.value });
        this.props.loadData(activePage, sort, limit, e.target.value);
    }

    handlePageChange(value) {
        const { activePage, sort, limit, filter } = this.state;
        this.setState({ activePage: value });
        this.props.loadData(value, sort, limit, filter);
    }

    handleSelect(value) {
        this.props.viewClient(value);
    }
    
    render() {
        const { activePage, sort, sortOptions, limit, limitOptions } = this.state;

        return (
            <div>
                <Header
                    sort={sort}
                    sortOptions={sortOptions}
                    onSort={(value) => this.handleSortChange(value)}
                    limit={limit}
                    limitOptions={limitOptions}
                    onDisplay={(value) => this.handleDisplayChange(value)}
                    onFilter={(value) => this.handleFilterChange(value)}
                />
                <List
                    clients={this.props.clients}
                    onSelect={(client) => this.handleSelect(client)}
                />
                {(this.props.meta) && (
                    <Footer 
                        activePage={activePage}
                        countPerPage={limit}
                        totalItemsCount={this.props.meta.total_results}
                        rangeDisplayed={5}
                        onPage={(value) => this.handlePageChange(value)}
                    />
                )}
            </div>
        );
    }
}

ClientsLogic.contextTypes = {
  router: PropTypes.object.isRequired,
};
