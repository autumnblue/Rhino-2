import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBem from 'bem-cx';
import DashboardMenu from './Menu/DashboardMenu';
import DashboardContent from './Content/DashboardContent';
// import DashboardBar from './Bar/DashboardBar';

const bem = makeBem('djavanDashboard');

const Dashboard = ({props: {menu, children, location}}) =>
  <div className={bem}>
    <DashboardMenu menu={menu} location={location}/>
    <DashboardContent>{children}</DashboardContent>
  </div>;

Dashboard.propTypes = {
  props: React.PropTypes.shape({
    menu: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
  }),
};

export default Dashboard;

