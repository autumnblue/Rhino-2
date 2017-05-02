import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Entry = ({ children }) => {
  return (
    <div className="entryWrapper">
      { children }
    </div>
  );
}

Entry.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Entry;
