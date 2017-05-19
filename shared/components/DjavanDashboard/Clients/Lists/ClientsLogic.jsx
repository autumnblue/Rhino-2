import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class ClientsLogic extends Component {

    componentWillMount() {
        var sorts = [];
        sorts.push({ value: 0, label: "Date Created" });
        sorts.push({ value: 1, label: "Company Name" });
        sorts.push({ value: 2, label: "Focal Name" });
        sorts.push({ value: 3, label: "Number of Service Orders" });
        sorts.push({ value: 4, label: "Number of Assessments" });

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

    handleAddClient() {
        this.props.addClient();
    }

    handleSortChange(event) {
        const { activePage, sort, limit, filter } = this.state;

        let sortValue;

        if (event.target.value == "Date Created") {
            sortValue = "date_created";
        } else if (event.target.value == "Company Name") {
            sortValue = "name";
        } else if (event.target.value == "Focal Name") {
            sortValue = "focal_name";
        } else if (event.target.value == "Number of Service Orders") {
            sortValue = "service";
        } else if (event.target.value == "Number of Assessments") {
            sortValue = "assessments";
        }

        this.setState({ sort: sortValue });
        this.props.loadData(activePage, sortValue, limit, filter);
    }

    handleDisplayChange(event) {
        const { activePage, sort, limit, filter } = this.state;

        let displayValue;

        if (event.target.value == "Display 10") {
            displayValue = 10;
        } else if (event.target.value == "Display 50") {
            displayValue = 50;
        } else if (event.target.value == "Display 100") {
            displayValue = 100;
        } else if (event.target.value == "Display All") {
            displayValue = 1000;
        }

        this.setState({ limit: displayValue });
        this.props.loadData(activePage, sort, displayValue, filter);
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
                    limit={limit}
                    limitOptions={limitOptions}
                    sort={sort}
                    sortOptions={sortOptions}
                    onAdd={() => this.handleAddClient()}
                    onDisplay={(value) => this.handleDisplayChange(value)}
                    onFilter={(value) => this.handleFilterChange(value)}
                    onSort={(value) => this.handleSortChange(value)}
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
