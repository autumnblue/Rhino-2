import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

const Footer = (props) => (
    <div className="clientlistfooter-block">
        <Pagination
            prevPageText='Prev'
            nextPageText='Next'
            activePage={props.activePage} 
            itemsCountPerPage={props.countPerPage} 
            totalItemsCount={props.totalItemsCount} 
            pageRangeDisplayed={props.rangeDisplayed}
            onChange={(value) => props.onPage(value)}
        />
    </div>
);

export default Footer;