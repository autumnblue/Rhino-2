import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { djavanTheme } from '../constants/djavanTheme';

const MainLayout = ({ children }) =>
 (<div>
   <MuiThemeProvider muiTheme={getMuiTheme(djavanTheme)}>
     {children}
   </MuiThemeProvider>
 </div>);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  // children: PropTypes.object,
};

export default MainLayout;
