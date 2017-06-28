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
import enhance from './enhance';

const bem = makeBem('login');

const LoginPage = ({
  title,
  onSubmit,
  backLink
}) => (
  <DashboardForm>
    <Helmet title={title} titleTemplate="%s | DJAVAN - RSL" />
    <DashboardFormCard title="Log In" backLink={backLink}>
      <div className={bem}>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </DashboardFormCard>
  </DashboardForm>
);

export default enhance(LoginPage);
