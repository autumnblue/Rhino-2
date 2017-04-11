import React, { PropTypes } from 'react';

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
