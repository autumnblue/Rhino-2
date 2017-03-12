import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import DashboardCard from './DashboardCard';
import DashboardCardTitle from './DashboardCardTitle'
// import { Card, CardText } from 'material-ui/Card';

const bem = makeBem('djavanDashboardCard');


export default class DashboardSubCard extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    toggleMore: PropTypes.func.isRequired,
    toggleStatus: PropTypes.bool.isRequired,
  };

  state = {
    showMoreButton: true,
    showMoreButtonStateInitialized: false,
  };

  updateButtonDisplayState(childrenedit) {
    console.log(this.state);
    console.log(childrenedit);
    if (!this.state.showMoreButtonStateInitialized && childrenedit) {
      this.setState({
        showMoreButton: childrenedit.scrollHeight > 0,
        showMoreButtonStateInitialized: true,
      })

    }
  }


  render() {
    const { children, toggleMore, toggleStatus, clickHandler } = this.props;
    if (!children) return (
      <DashboardCard className={bem} children={children} clickHandler={clickHandler} />
    );

    console.log("Togglestatus:");
    console.log(toggleStatus);

//    {/*<DashboardCard className={bem} clickHandler={() => toggleMore()}>*/}
    return (
      <DashboardCard className={bem.el('edit').mod({ more: toggleStatus })}>
        <div className={bem.mod({ interactive: true })}>
          <DashboardCardTitle title="Edit" />
          {!!children && children !== '' &&
          <div>
            <div
              ref={(childrenedit) => this.updateButtonDisplayState(childrenedit)}
            >
              {children}
            </div>
          </div>
          }
        </div>
      </DashboardCard>
    );
  }



}
