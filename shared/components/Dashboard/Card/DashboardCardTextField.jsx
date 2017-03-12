import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
// import { Card, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'

const bem = makeBem('djavanDashboardCardTextField');


const DashboardCardTextField = ({ children }) =>
    <TextField className={bem}>
      {children}
    </TextField>;

floatingLabelFixed
floatingLabelText

hintText
fullWidth
name



DashboardCardTextField.propTypes = {
  // clickHandler: PropTypes.func,
  children: PropTypes.node,
};

export default DashboardCardTextField;
