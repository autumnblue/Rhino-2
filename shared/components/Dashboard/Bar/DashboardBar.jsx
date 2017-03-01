import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import makeBem from 'bem-cx';
import { push } from 'react-router-redux';
// import cookie from 'react-cookie';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
// import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DashboardBarLogout from './DashboardBarLogout';

const bem = makeBem('djavanDashboardBar');

const getDashboardBarContent = (type, children) => {
  const ToolbarContent = _.find(children, (child) => _.get(child, 'key') === type);
  return _.get(ToolbarContent, 'props.children');
};

const logOut = () => {
  // cookie.remove('token', { path: '/' });
  window.location = '/';
};

export default class DashboardBar extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    backLink: PropTypes.string,
    // currentUser: PropTypes.object.isRequired,
    children: PropTypes.node,
    actions: PropTypes.node,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Paper className={bem} zDepth={2}>
        <div className={bem.el('background')}>
          <Toolbar>
            <ToolbarGroup firstChild={!!this.props.backLink}>
              {!!this.props.backLink && <div className={bem.el('link')} >
                <FlatButton onTouchTap={() => this.context.router.goBack()} icon={<NavigationArrowBack />} />
              </div>}
              <ToolbarTitle text={this.props.title} />
            </ToolbarGroup>
            <ToolbarGroup>
              {this.props.actions}
              {/*<DashboardBarLanguageSelector selector currentUser={!!this.props.currentUser} />*/}
              <div>{getDashboardBarContent('DashboardBarToolbarContent', this.props.children)}</div>
              {/*{this.props.currentUser.firstName && (this.props.currentUser.firstName || ) &&*/}
              {/*<div className={bem.el('avatar').el('name')}>*/}
                {/*{this.props.currentUser.firstName}*/}
              {/*</div>*/}
              {/*}*/}
              <DashboardBarLogout logOut={logOut} />
            </ToolbarGroup>
          </Toolbar>
          {getDashboardBarContent('DashboardBarMainContent', this.props.children)}
        </div>
      </Paper>
    );
  }

}
