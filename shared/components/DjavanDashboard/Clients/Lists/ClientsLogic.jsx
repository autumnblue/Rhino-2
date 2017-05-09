import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class ClientsLogic extends Component {
    state = {
        sort: null,
        sortOptions: null,
        display: null,
        displayOptions: null,
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
        displays.push({ value: 0, label: "Display 10" });
        displays.push({ value: 1, label: "Display 50" });
        displays.push({ value: 2, label: "Display 100" });
        displays.push({ value: 3, label: "Display All" });
        this.setState({ displayOptions: displays });
    }

    onSortChange(obj) {
        this.setState({ sort: obj.value });
    }

    onDisplayChange(obj) {
        this.setState({ display: obj.value });
    }

    onFilterChange(e) {
        console.log(e.target.value);
    }
    
    render() {
        const { sort, sortOptions, display, displayOptions } = this.state;

        return (
            <div>
                <Header
                    sort={sort}
                    sortOptions={sortOptions}
                    onSort={(value) => this.onSortChange(value)}
                    display={display}
                    displayOptions={displayOptions}
                    onDisplay={(value) => this.onDisplayChange(value)}
                    onFilter={(value) => this.onFilterChange(value)}
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
