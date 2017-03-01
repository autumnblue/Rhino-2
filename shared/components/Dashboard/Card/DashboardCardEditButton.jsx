import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import RaisedButton from 'material-ui/RaisedButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';

const bem = makeBem('myProfile');


const DashboardCardEditButton = ({ clickHandler }) =>
  <div className={bem.el('editButton')}>
    <RaisedButton onTouchTap={clickHandler} label="Edit" icon={<ImageEdit />} />
  </div>;

DashboardCardEditButton.propTypes = {
  clickHandler: PropTypes.func,
};

export default DashboardCardEditButton;
