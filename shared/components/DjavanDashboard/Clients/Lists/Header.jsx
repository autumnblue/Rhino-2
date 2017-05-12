import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontAwesome from 'react-fontawesome';
import Select from 'react-select';

import { djavanTheme } from '../../../../constants/djavanTheme';

const Header = (props) => (
    <div className="clientlistheader-block">
        <div className="sort">
            <Select
                name="form-field-name"
                value={props.sort}
                options={props.sortOptions}
                onChange={(value) => props.onSort(value)}
            />
        </div>
        <div className="display">
            <Select
                name="form-field-name"
                value={props.limit}
                options={props.limitOptions}
                onChange={(value) => props.onDisplay(value)}
            />
        </div>
        <div className="filter">
            <input type="text" className="control" placeholder="Filter..." onChange={(value) => props.onFilter(value)}/>
        </div>
        <div className="space">

        </div>
        <div className="control">
            <FloatingActionButton className="add">
                <FontAwesome
                    name='plus'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </FloatingActionButton>
        </div>
    </div>
);

export default Header;