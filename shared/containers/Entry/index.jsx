import React, { PropTypes } from 'react';

export default function Entry({ children }) {
  return (
    <div className="entryWrapper">
      { children }
    </div>
  );
}

Entry.propTypes = {
  children: PropTypes.object.isRequired,
};
