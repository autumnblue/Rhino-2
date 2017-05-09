import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

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

        </div>
        <div className="filter">

        </div>
        <div className="space">

        </div>
        <div className="control">

        </div>
    </div>
);

export default Header;