import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class ClientsLogic extends Component {

  render() {
    return (
        <div>
            <Header />
            <List />
            <Footer />
        </div>
    );
  }
}

ClientsLogic.contextTypes = {
  router: PropTypes.object.isRequired,
};
