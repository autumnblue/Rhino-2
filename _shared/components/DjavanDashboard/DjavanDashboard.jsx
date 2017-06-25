import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlacesBusinessCenter from 'material-ui/svg-icons/places/business-center';
import Dashboard from '../Dashboard/Dashboard';
import Error from './Error';

export default class DjavanDashboard extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    menu: PropTypes.array.isRequired
  }

  static defaultProps = {
    menu: [
      { id: 1, text: 'Clients', path: '/dashboard/clients/list', icon: PlacesBusinessCenter },
      { id: 2, text: 'Assessments', path: '/dashboard/assessments', icon: PlacesBusinessCenter },
      { id: 3, text: 'Services', path: '/dashboard/services', icon: PlacesBusinessCenter },
      { id: 4, text: 'Log out', path: '/logout', icon: PlacesBusinessCenter},
    ]
  }

  render() {
    return (<div>
      <Error />
      <Dashboard {...this} />
    </div>);
  }
}

