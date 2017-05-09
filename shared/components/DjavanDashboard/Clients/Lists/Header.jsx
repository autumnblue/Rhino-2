import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const Header = (props) => (
    <div className="clientlistheader-block">
        <Select
            name="form-field-name"
            value="one"
            options={props.sort}
            onChange={props.onSort}
        />
    </div>
);

export default Header;