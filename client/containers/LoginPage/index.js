import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import makeBem from 'bem-cx';


import { withRouter } from 'react-router'

import {
  DashboardForm,
  DashboardFormCard,
} from 'client/components';

import LoginForm from './LoginForm';

const bem = makeBem('login');

export default (props) => (
  <DashboardForm>
    <Helmet title={props.title} titleTemplate="%s | DJAVAN - RSL" />
    <DashboardFormCard title="Log In" backLink={props.backLink}>
      <div className={bem}>
        <LoginForm />
      </div>
    </DashboardFormCard>
  </DashboardForm>
);
