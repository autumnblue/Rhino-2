import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import makeBem from 'bem-cx';
import RaisedButton from 'material-ui/RaisedButton';
import DashboardForm from '../Dashboard/Form/DashboardForm';
import DashboardFormCard from '../Dashboard/Form/DashboardFormCard';
import DashboardFormCardAction from '../Dashboard/Form/DashboardFormCardAction';
import DashboardCardActionCenter from '../Dashboard/Card/DashboardCardActionCenter';
import InputField from '../Form/InputField';

const bem = makeBem('login');

const LoginComponent = (props) =>
  <DashboardForm>
    <Helmet title={props.title} titleTemplate="%s | DJAVAN - RSL" />
    <DashboardFormCard title="Log In" backLink={props.backLink}>
      <div className={bem}>
        <form onSubmit={props.handleSubmit}>

          <InputField
            question="email"
            hint="email@example.com"
            icon="email"
            onChange={props.handleEmailChange}
            onBlur={props.handleEmailChange}
            valid={props.valid}
            autoFocus
          />

          <InputField
            question="password"
            hint="Password"
            icon="lock"
            onChange={props.handlePasswordChange}
            onBlur={props.handlePasswordChange}
          />

          <DashboardFormCardAction>
            <DashboardCardActionCenter>
              <RaisedButton primary label="Login" onTouchTap={props.handleSubmit} />
            </DashboardCardActionCenter>
          </DashboardFormCardAction>

          <div className={bem.el('bottom')}>
            <InputField question="rememberMe" label="Remember me" onChange={props.handleRememberChange} />
          </div>

        </form>
      </div>
    </DashboardFormCard>
  </DashboardForm>;

export default LoginComponent;
