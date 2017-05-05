import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import makeBem from 'bem-cx';
import DashboardCard from '../../../Dashboard/Card/DashboardCard';
import DashboardCardTitle from '../../../Dashboard/Card/DashboardCardTitle';
import DashboardCardAction from '../../../Dashboard/Card/DashboardCardAction';
import DashboardCardActionRight from '../../../Dashboard/Card/DashboardCardActionRight';
import DashboardCardSlicer from '../../../Dashboard/Card/DashboardCardSlicer';
import DashboardCardSlicerLeft from '../../../Dashboard/Card/DashboardCardSlicerLeft';
import DashboardCardSlicerMiddle from '../../../Dashboard/Card/DashboardCardSlicerMiddle';
import DashboardCardSlicerRight from '../../../Dashboard/Card/DashboardCardSlicerRight';
import DashboardCardInfo from '../../../Dashboard/Card/DashboardCardInfo';

const bem = makeBem('clients');

export default class Client extends Component {
    static proptTypes = {
        client: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <DashboardCard>
                    <div className={bem.mod({ interactive: true })}>
                        <DashboardCardSlicer>
                            <DashboardCardSlicerLeft>
                                <div>TEST</div>
                            </DashboardCardSlicerLeft>
                            <DashboardCardSlicerMiddle>
                                <div>TEST</div>
                            </DashboardCardSlicerMiddle>
                            <DashboardCardSlicerRight>
                                <FontAwesome
                                    className='super-crazy-colors'
                                    name='edit'
                                    size='2x'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    onClick={() => console.log('$$$$$$$$')}
                                />
                            </DashboardCardSlicerRight>
                        </DashboardCardSlicer>
                    </div>
                </DashboardCard>
            </div>
        );
    }
}