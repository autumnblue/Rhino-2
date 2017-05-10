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
        option: 0,
        options: [],
        parent: 0,
        parents: [],
        columns: [],
        data: [],
    }

    componentDidMount() {
        let options = [];
        options.push({ value: 0, label: "AM" });
        options.push({ value: 1, label: "PM" });
        this.setState({ options: options });

        let parents = [];
        parents.push({ value: 0, label: "Client X" });
        parents.push({ value: 1, label: "Client Y" });
        this.setState({ parents: parents });

        const columns = [{
            header: 'Client Name',
            accessor: 'clientname' // String-based value accessors!
        }, {
            header: 'Focal Name',
            accessor: 'focalname' // String-based value accessors!
        }, {
            header: 'SO Count',
            accessor: 'socount',
            render: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            header: 'Assessment Count',
            accessor: 'asscount',
            render: props => <span className='number'>{props.value}</span> // Custom cell components!
        }];
        this.setState({ columns: columns });

        const data = [{
                clientname: "GCO International",
                focalname: "Rick Richard",
                socount: 22,
                asscount: 33
            }, {
                clientname: "BPO Industries",
                focalname: "Garrus Vakarian",
                socount: 11,
                asscount: 55
            }, {
                clientname: "Kuat Heavy Industries",
                focalname: "Gael Tarkin",
                socount: 2,
                asscount: 4
            }
        ];
        this.setState({ data: data });
    }

    onOptionChanged(value) {
        this.setState({ option: value });
    }

    onParentChanged(value) {
        this.setState({ parent: value });
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
        const { option, options, parent, parents, columns, data } = this.state;
        
        return (
            <ClientItem
                client={this.props.clientItem}
                option={option}
                options={options}
                onDelete={() => this.onDelete()}
                onOptions={(value) => this.onOptionChanged(value)}
                parent={parent}
                parents={parents}
                onParent={(value) => this.onParentChanged(value)}
                onUpdateField={(e, name) => this.onUpdateField(e, name)}
                
                columns={columns}
                data={data}
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