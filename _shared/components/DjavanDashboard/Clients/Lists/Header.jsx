import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontAwesome from 'react-fontawesome';
import DebounceInput from 'react-debounce-input';

import { djavanTheme } from '../../../../constants/djavanTheme';

const Header = (props) => (
    <div className="clientlistheader-block">
        <div className="sort">
            <select className="select" onChange={(value) => props.onSort(value)}>
                {
                    _.map(props.sortOptions, (sort, key) => {return (
                        <option key={key} value={sort.sortValue}>{sort.label}</option>
                    )})
                }
            </select>
        </div>
        <div className="display">
            <select className="select" onChange={(value) => props.onDisplay(value)}>
                {
                    _.map(props.limitOptions, (limit, key) => {return (
                        <option key={key} value={limit.sortValue}>{limit.label}</option>
                    )})
                }
            </select>
        </div>
        <div className="filter">
            <DebounceInput debounceTimeout={300} type="text" className="control" placeholder="Filter..." onChange={(value) => props.onFilter(value)}/>
        </div>
        <div className="space">

        </div>
        <div className="control">
            <FloatingActionButton className="add" onTouchTap={() => props.onAdd()}>
                <FontAwesome
                    name='plus'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </FloatingActionButton>
        </div>
    </div>
);

export default Header;
