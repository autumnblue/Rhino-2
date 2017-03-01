import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const App = ({ children, message }) => (
  <div className="appWrapper">
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
  message: PropTypes.string,
};

const mapStateToProps = ({ error }) => ({
  message: error.message,
});

export default connect(mapStateToProps)(App);
